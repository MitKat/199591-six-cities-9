import { Fragment } from 'react';
import { Offer } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

type ListNearPlacesProps = {
  offers: Offer[];
}

function ListNearPlaces({offers}: ListNearPlacesProps): JSX.Element {

  return (
    <Fragment>
      {offers.map((offer) => (
        <PlaceCard key={offer.id}
          offerItem={offer}
          typeCard='Near'
        />
      ))}
    </Fragment>
  );
}

export default ListNearPlaces;
