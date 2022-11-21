import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
import moment from 'moment';

const pageSize = 12;
const initialState = {
    errorMessage: null,
    totalResult: pageSize,
    q: 'crypto',
    from: moment().format("YYYY-MM-DDT00:00:00.000"),
    to: moment().format("YYYY-MM-DDT23:59:59.999"),
    language: 'en',
    searchIn: 'title',
    pageSize,
    page: 1,
};

export const setErrorMessage = createAction("setErrorMessage");
export const setPage = createAction("setPage");
export const setTotalResult = createAction("setTotalResult");

const reducer = createReducer(initialState, {
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    },
    [setPage]: (state, action) => {
        state.page = action.payload;
    },
    [setTotalResult]: (state, action) => {
        state.setTotalResult = action.payload;
    }
});

export const store = configureStore({ reducer });