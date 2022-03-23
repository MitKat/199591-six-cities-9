import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { favoriteOffers } from './mocks/favoriteOffers';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App
        reviews = {reviews}
        favoriteOffers = {favoriteOffers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

