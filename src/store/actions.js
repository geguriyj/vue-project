import * as api from "../api";
import * as types from "./mutation-types";

export const getForm = ({ commit }) => {
    api.getForm(payload => {
        commit(types.FETCHED_FORM, { payload });
    });
};