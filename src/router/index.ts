import { createRouter, RouteRecordRaw, Router, createWebHistory } from "vue-router"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/HomeView.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/LoginView.vue"),
	},
    {
		path: "/about",
		name: "about",
		component: () => import("../views/AboutView.vue"),
	}
]

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router