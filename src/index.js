import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ! Exportamos el Provider, sera el que proveera todos los estados a la App
import { Provider } from "react-redux"
import { store } from "./store/store" // ? Importamos la store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);