import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './Services/stateService';

// document.GetElementById : takes html element with id root from DOM (Document Object Model).
// DOM it's all structure html in js object
// DOM stores in global variable, which calls 'document'

// ReactDom is a support package React to interact with normal DOM
// createRoot creates the main directory where our entire application will run
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render is a func which renders React compjnents
// Render means draw components and trnsfer from JSX or React component in clear DOM
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

