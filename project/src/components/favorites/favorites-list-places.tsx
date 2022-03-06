import { Fragment } from 'react';
import FavoritePlaceCard from '../favorites/favorite-place-card';
import { FavoriteOffer } from '../../mocks/favoriteOffers';

type FavoritesListPlacesProps = {
  favoriteOffers: FavoriteOffer[];
}

function FavoritesListPlaces({favoriteOffers}: FavoritesListPlacesProps): JSX.Element {

  return (
    <Fragment>
      {favoriteOffers.map((offer) => (
        <FavoritePlaceCard key={offer.id} offerItem={offer} typeCard='Favorite' />
      )) }
    </Fragment>
  );
}

export default FavoritesListPlaces;
