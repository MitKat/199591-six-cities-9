import FavoritePlaceCard from './favorite-place-card';
import { Offer } from '../../mocks/offers';
import { Fragment } from 'react';

type FavoritesListPlacesProps = {
  offers: Offer[];
}

function FavoritesListPlaces({offers}: FavoritesListPlacesProps): JSX.Element {

  return (
    <Fragment>
      {offers.map((offer) => (
        <FavoritePlaceCard key={offer.id} offerItem={offer} />
      )) }
    </Fragment>
  );
}

export default FavoritesListPlaces;
