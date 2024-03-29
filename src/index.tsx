import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store,persistor } from './Redux/store';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { MyContext } from './contexts/allContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MyContext.Provider value="abc">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
      </MyContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
