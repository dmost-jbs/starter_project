import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import storeInfo from './redux/store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'

const store = storeInfo.store;

store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={storeInfo.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


