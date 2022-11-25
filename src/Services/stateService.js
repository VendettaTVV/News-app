// Redux eto biblioteka kotoraja pomogaet nam rabotat s sostojaniami componentov
// Redux eto globalnoe sostojanie prilogenija
// Redux vzaimodeistvujet tolko s temi komponent, kotorye neobhodimo , ne zatragivaet ostalnyh v cepo4ke
// eto pomogaet lu4she kontrolirovat otrisovky/render komponentov
// Redux rabotaet v nezavisimosti ot strukturnogo dereva projecta 
// @reduxjs/toolkit eto glavnaja biblioteka redux
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
import moment from 'moment';

const pageSize = 12;
// peremennaya tip object : izna4alnoe sostojanie
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
// createAction deklarirued dejstvie v Redux
// Eto deistvie my papuskaem, kogda hotim izmenit sostojanie
export const setErrorMessage = createAction("setErrorMessage");
export const setPage = createAction("setPage");
export const setTotalResults = createAction("setTotalResults");
export const setSearchParams = createAction("setSearchParams");

// createReduser eto obrsbot4ik deistvia
//zdes my govorim reduxu 4to my hotim sdelat etim deistviem
//v nashem slu4ae my zapuskaem sostojanie
//actio.payload - novaja peredannaja informacia
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
// zdes my vse sobiraem vmeste i sozdaem hranilische
export const store = configureStore({ reducer });

//Hranilishe my peredaem v component provider ot react-redux biblioteki i oborachivaem ves nash project