import * as api from "../api";
import * as types from "./mutation-types";

export const getForm = ({ commit }) => {
    api.getForm(payload => {
        commit(types.FETCHED_FORM, { payload });
    });
};
export const getReport = ({ commit }) => {
  api.getReport(payload => {
    commit(types.FETHED_REPORT, { payload });
});
};
