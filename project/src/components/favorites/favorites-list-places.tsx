import { Fragment } from 'react';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type FavoritesListPlacesProps = {
  favoriteOffers: Offer[];
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
