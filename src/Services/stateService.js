// Redux is a library that helps us work with component states
// Redux global application state
// Redux interacts only with those components that are needed, does not affect the rest in the chain
// It helps you have better control render components
// Redux works regardless of the structural tree of the project
// @reduxjs/toolkit - main library redux
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
import moment from 'moment';

const pageSize = 12;
// Variable object type : initial state
const initialState = {
    errorMessage: null,
    totalResults: pageSize,
    q: 'crypto',
    from: moment().format("YYYY-MM-DDT00:00:00.000"),
    to: moment().format("YYYY-MM-DDT23:59:59.999"),
    language: 'en',
    searchIn: 'title',
    pageSize,
    page: 1,
};
// createAction declares an action in Redux
// We run this action when we want to change the state

export const setErrorMessage = createAction("setErrorMessage");
export const setPage = createAction("setPage");
export const setTotalResults = createAction("setTotalResults");
export const setSearchParams = createAction("setSearchParams");

// createReduser  is the action handler
// Here we are talking redux what do we want to do with this action
// In our case, we start the state
// action.payload - new transmitted information

const reducer = createReducer(initialState, {
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    },
    [setPage]: (state, action) => {
        state.page = action.payload;
    },
    [setTotalResults]: (state, action) => {
        state.totalResults = action.payload;
    },
    [setSearchParams]: (state, action) => {
        state.setSearchParams = action.payload;
    }
});

// This is where we put it all together and create a store

export const store = configureStore({ reducer });

// Store we pass the provider to the component react-redux library and wrap all our project