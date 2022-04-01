import React from 'react';
import { Fragment } from 'react';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offer[];
  onListPlaceHover?: (placeId: number) => void;
}

function PlaceCardList({offers, onListPlaceHover}: PlaceCardListProps): JSX.Element {

  return (
    <Fragment>
      {offers.map((offer) => (
        <PlaceCard key={offer.id}
          offerItem={offer}
          typeCard='Normal'
          onListPlaceHover={onListPlaceHover}
        />
      )) }
    </Fragment>
  );
}

export default React.memo(PlaceCardList);
