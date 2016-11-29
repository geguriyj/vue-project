import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { getForm, getReport } from "./store/actions";


Vue.config.debug = true;

new Vue({
    el: "#app",
    store,
    render: h => h(App)
});

getForm(store);
getReport(store);
