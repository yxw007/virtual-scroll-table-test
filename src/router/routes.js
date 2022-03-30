import main from "@/view/main";

export default [
	{
		path: "/",
		alias: ["/main.html"],
		name: "index",
		nav_name: "首页",
		component: main,
		redirect: "/main",
	},
	{
		path: "/",
		alias: ["/about.html"],
		name: "index",
		nav_name: "关于",
		component: () => import("@/view/about"),
		redirect: "/main",
	},
	{
		path: "/element",
		alias: ["/element.html"],
		name: "index",
		nav_name: "element",
		component: () => import("@/view/element"),
	},
	{
		path: "/vuetify",
		alias: ["/vuetify.html"],
		name: "index",
		nav_name: "vuetify",
		component: () => import("@/view/vuetify"),
	},
];
