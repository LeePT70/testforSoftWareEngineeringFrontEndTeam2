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
	},
	{
		path: "/learnVueData",
		name: "Vue Data",
		component: () => import("../learnVue/learnData.vue"),
	},
	{
		path: "/learnVueMethods",
		name: "Vue Methods",
		component: () => import("../learnVue/learnMethods.vue"),
	},
	{
		path: "/learn_v-on",
		name: "V-on",
		component: () => import("../learnVue/learnV-on.vue"),
	},
	{
		path: "/learn_v-bind",
		name: "V-bind",
		component: () => import("../learnVue/learnV-bind.vue"),
	},
	{
		path: "/learn_v-if&v-show",
		name: "V-if & V-show",
		component: () => import("../learnVue/learnV-if&V-show.vue"),
	},
	{
		path: "/learn_v-for",
		name: "V-for",
		component: () => import("../learnVue/learnV-for.vue"),
	},
	{
		path: "/learn_v-model",
		name: "V-model",
		component: () => import("../learnVue/learnV-model.vue"),
	},
]

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router