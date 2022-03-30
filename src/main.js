import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import "element-ui";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vue({
	el: "#app",
	router,
	store,
	vuetify: new Vuetify(),
	render: (h) => h(App),
});
