import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { favoriteOffers } from './mocks/favoriteOffers';
import { Provider } from 'react-redux';
import { store } from './store';

const Setting = {
  COUNT_OFFER: 323,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        countOffer = {Setting.COUNT_OFFER}
        offers = {offers}
        reviews = {reviews}
        favoriteOffers = {favoriteOffers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

