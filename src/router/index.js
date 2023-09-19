import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ManagementView from "../views/ManagementView.vue";
import store from "../store";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/management",
		name: "management",
		component: ManagementView,
		meta: { requiresAuth: true },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth",
			};
		} else if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0, behavior: "smooth" };
		}
	},
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
	const loggedIn = store.state.log.loggedIn;

	if (requiresAuth && !loggedIn) {
		next("/");
	} else {
		next();
	}
});

export default router;
