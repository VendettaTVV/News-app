import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
import moment from 'moment';

const initialState = {
    errorMessage: null,
    q: 'crypto',
    from: moment().format("YYYY-MM-DDT00:00:00.000"),
    to: moment().format("YYYY-MM-DDT23:59:59.999"),
    language: 'en',
    searchIn: 'title',
    pageSize: 12,
    page: 1,
};

export const setErrorMessage = createAction("setErrorMessage");

const reducer = createReducer(initialState, {
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    }
});

export const store = configureStore({ reducer });