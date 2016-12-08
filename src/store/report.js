import Vue from "vue";
import * as api from "../../api";
import * as types from "../mutation-types";

const defaultState = {
    outline: {
        formDescription: { ko: "" },
        formTitle: { ko: "" },
        themeId: "0"
    },
    replyCount: 0,
    components: [],
    respondents: [],
    choices: []
};

const state = {...defaultState };

const getters = {
    reportTitle: (state) => state.outline.formTitle.ko,
    reportDescription: (state) => state.outline.formDescription.ko,
    reportItems: state => state.components,
    replyCount: state => state.replyCount,
    choices: state => state.choices
};

const actions = {
    getReport(context) {
        api.getReport().then((resp) => {
            context.commit(types.UPDATE_REPORT, resp);
        });
    }
};

const mutations = {
    [types.UPDATE_REPORT](state, resp) {
        if (!resp) {
            resp = defaultState;
        }
        Object.keys(resp).forEach(k => Vue.set(state, k, resp[k]));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};