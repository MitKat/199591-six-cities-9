import { Fragment } from 'react';
import PlaceCard from '../place-card/place-card';
import { FavoriteOffer } from '../../mocks/favorteOffers';

type FavoritesListPlacesProps = {
  favoriteOffers: FavoriteOffer[];
}

function FavoritesListPlaces({favoriteOffers}: FavoritesListPlacesProps): JSX.Element {

  return (
    <Fragment>
      {favoriteOffers.map((offer) => (
        <PlaceCard key={offer.id} offerItem={offer} typeCard='Favorite' />
      )) }
    </Fragment>
  );
}

export default FavoritesListPlaces;
