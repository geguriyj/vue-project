import Vue from "vue";
import VueRouter from "vue-router";
import List from "./components/List.vue";
import MyList from "./components/List.my.vue";
import Edit from "./components/Edit.vue";
import Report from "./components/Report.vue";
import ReportLongAnswer from "./components/Report.longAnswer.vue";

Vue.use(VueRouter);
const routes = [{
    path: "/list",
    component: List,
    children: [{
        path: "",
        redirect: "shared"
    }, {
        path: "shared",
        component: { name: "sharedList", template: "<h3>받은 설문</h3>" }
    }, {
        path: "my",
        component: MyList
    }]
}, {
    path: "/edit/:id",
    component: Edit
}, {
    path: "/report/:id",
    component: Report
}, {
    path: "/report/:id/comp/:compId",
    component: ReportLongAnswer
}, {
    // catch all redirect
    path: "*",
    redirect: "list"
}];

export default new VueRouter({
    routes
});