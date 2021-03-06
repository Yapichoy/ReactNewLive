import React from 'react';
import {render} from 'react-dom';
import './index.sass';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store.js';
const renderDOM = () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(renderDOM);
renderDOM();
