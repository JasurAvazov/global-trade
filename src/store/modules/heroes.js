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
			const q = query(collection(db, "heroes"));
			const querySnapshot = await getDocs(q);
			const items = querySnapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() };
			});
			console.log("items", items);
			commit("setItems", items);
		} catch (error) {
			console.error("Error fetching hero items:", error);
		}
	},

	async addItem({ dispatch }, heroData) {
		try {
			const newItem = {
				...heroData,
				created_at: new Date().toISOString(),
			};
			await addDoc(collection(db, "heroes"), newItem);
			await dispatch("fetchItems");
		} catch (error) {
			console.error("Error adding hero item:", error);
		}
	},

	async deleteItem({ dispatch }, itemId) {
		try {
			await deleteDoc(doc(db, "heroes", itemId));
			await dispatch("fetchItems");
		} catch (error) {
			console.error("Error deleting hero item:", error);
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
