import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { reviews } from './mocks/reviews';
import { favoriteOffers } from './mocks/favoriteOffers';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews = {reviews}
        favoriteOffers = {favoriteOffers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

