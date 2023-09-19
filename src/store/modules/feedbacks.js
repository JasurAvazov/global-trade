import { db } from "../../firebase.js";
import {
	collection,
	addDoc,
	deleteDoc,
	getDocs,
	query,
	orderBy,
	doc,
	getDoc,
	setDoc,
} from "firebase/firestore";

const state = {
	feedbacksNumber: 1,
	items: [],
	branchReports: {},
};

const mutations = {
	updateBranchReport(state, title) {
		if (!state.branchReports[title]) {
			state.branchReports[title] = [];
		}
		state.branchReports[title].push(state.feedbacksNumber - 1);
	},
	setFeedbacksNumber(state, number) {
		state.feedbacksNumber = number;
		localStorage.setItem("feedbacksNumber", state.feedbacksNumber);
	},
	setItems(state, items) {
		state.items = items;
	},
	incrementFeedbacksNumber(state) {
		state.feedbacksNumber = (state.feedbacksNumber % 99) + 1;
		localStorage.setItem("feedbacksNumber", state.feedbacksNumber);
	},
};

const actions = {
	async fetchItems({ commit }) {
		const q = query(collection(db, "feedbacks"), orderBy("created_at","desc"));
		const querySnapshot = await getDocs(q);
		const items = querySnapshot.docs.map((doc) => {
			return { id: doc.id, ...doc.data() };
		});
		commit("setItems", items);
	},

	async fetchFeedbacksNumber({ commit }) {
		const docRef = doc(db, "settings", "feedbacksNumber");
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			commit("setFeedbacksNumber", docSnap.data().value);
		}
	},

	async updateFeedbacksNumber({ state }) {
		const docRef = doc(db, "settings", "feedbacksNumber");
		await setDoc(docRef, { value: state.feedbacksNumber });
	},

	async addItem({ commit, state, dispatch }, branch) {
		if (state.addingItem) {
			return null;
		}
		state.addingItem = true;
	
		let newItemNumber = null;
	
		try {
			await dispatch("fetchFeedbacksNumber");
			const newItem = {
				number: state.feedbacksNumber,
				created_at: new Date().toISOString(),
				branch: branch,
			};
	
			const newNumber = (state.feedbacksNumber % 99) + 1;
			const docRef = await addDoc(collection(db, "feedbacks"), newItem);
			newItemNumber = newNumber-1;

			if (newNumber === 1) {
				newItemNumber = 99;
			}
	
			await setDoc(doc(db, "settings", "feedbacksNumber"), { value: newNumber });
	
			commit("setFeedbacksNumber", newNumber);
			await dispatch("fetchItems");
			
		} finally {
			state.addingItem = false;
		}
	
		return newItemNumber;
	},

	async deleteItem({ dispatch }, itemId) {
		try {
			await deleteDoc(doc(db, "feedbacks", itemId));
			await dispatch("fetchItems");
		} catch (error) {
			console.error("Error deleting item:", error);
		}
	},
};

const getters = {
	getItems: (state) => state.items,
	getBranchReports: (state) => state.branchReports,
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
