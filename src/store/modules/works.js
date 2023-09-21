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
			const q = query(
				collection(db, "works")
			);
			const querySnapshot = await getDocs(q);
			const items = querySnapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			commit("setItems", items);
		} catch (error) {
			console.error("Error fetching work items:", error);
		}
	},

	async addItem({ dispatch }, workData) {
		try {
			await addDoc(collection(db, "works"), {
				...workData,
				created_at: new Date().toISOString(),
			});
			await dispatch("fetchItems");
		} catch (error) {
			console.error("Error adding work item:", error);
		}
	},

	async deleteItem({ dispatch }, itemId) {
		try {
			await deleteDoc(doc(db, "works", itemId));
			await dispatch("fetchItems");
		} catch (error) {
			console.error("Error deleting work item:", error);
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
