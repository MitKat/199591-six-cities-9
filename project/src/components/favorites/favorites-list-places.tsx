import { Fragment } from 'react';
import { FavoriteOffer } from '../../mocks/favoriteOffers';
import PlaceCard from '../place-card/place-card';

type FavoritesListPlacesProps = {
  favoriteOffers: FavoriteOffer[];
}

function FavoritesListPlaces({favoriteOffers}: FavoritesListPlacesProps): JSX.Element {

  return (
    <Fragment>
      {favoriteOffers.map((offer) => (
        <PlaceCard key={offer.id}
          offerItem={offer}
          typeCard='Favorite'
        />
      )) }
    </Fragment>
  );
}

export default FavoritesListPlaces;
