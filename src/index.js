import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './Services/stateService';

// document.GetElementById : берет html element s id root iz DOM (Dociment Object Model).
// DOM eto vsja structura html v js ojecte
// DOM hranitsja v globalnoi peremennoi, kotoraja nazyvaetsya 'document'

// ReactDom eto vspomogatelnyi paket Reacta dlja vzaimodeistvia s obychnum DOM
//Create root sozdaet glavnju directoriu gde budet zapuskatsa vsjo nashe prilogenie
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render eto funkcija otrisovki React componentov
// Otrisovka znachit obrabotka componenta i perevodit is JSX ili React component v chistyi DOM
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

