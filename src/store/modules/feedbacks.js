import { db } from "../../firebase.js";
import {
	collection,
	addDoc,
	deleteDoc,
	getDocs,
	query,
	orderBy,
	doc,
} from "firebase/firestore";

const state = {
	items: [],
};

const mutations = {
	setItems(state, items) {
		state.items = items;
	},
};

const actions = {
	async fetchItems({ commit }) {
		try {
			const q = query(collection(db, "feedbacks"), orderBy("created_at","desc"));
			const querySnapshot = await getDocs(q);
			const items = querySnapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			commit("setItems", items);
		} catch (error) {
			console.error("Error fetching feedback items:", error);
		}
	},

	async addItem({ dispatch }, feedbackData) {
		try {
			const newItem = {
				...feedbackData,
				created_at: new Date().toISOString(),
			};
			await addDoc(collection(db, "feedbacks"), newItem);
			await dispatch("fetchItems");
		} catch (error) {
			console.error("Error adding feedback item:", error);
		}
	},

	async deleteItem({ dispatch }, itemId) {
		try {
			await deleteDoc(doc(db, "feedbacks", itemId));
			await dispatch("fetchItems");
		} catch (error) {
			console.error("Error deleting feedback item:", error);
		}
	},
};

const getters = {
	getItems: (state) => state.items,
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
