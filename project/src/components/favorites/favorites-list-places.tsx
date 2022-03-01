import { Offer } from '../../mocks/offers';
import { Fragment } from 'react';
import PlaceCard from '../place-card/place-card';

type FavoritesListPlacesProps = {
  offers: Offer[];
}

function FavoritesListPlaces({offers}: FavoritesListPlacesProps): JSX.Element {

  return (
    <Fragment>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offerItem={offer} typeCard='Favorite' />
      )) }
    </Fragment>
  );
}

export default FavoritesListPlaces;
