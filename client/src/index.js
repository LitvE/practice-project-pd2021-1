/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Setup from './boot/setup';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from './store';
import App from './App';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
