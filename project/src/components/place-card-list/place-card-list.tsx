import { Fragment } from 'react';
import { Offer } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offer[];
}

function PlaceCardList({offers}: PlaceCardListProps): JSX.Element {

  return (
    <Fragment>
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offerItem={offer} typeCard='Normal' />
      )) }
    </Fragment>
  );
}

export default PlaceCardList;
