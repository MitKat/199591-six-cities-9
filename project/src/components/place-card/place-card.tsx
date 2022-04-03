import React from 'react';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { getPercRating } from '../../utils';
import ButtonFavoriteMark from '../button-favorite-mark/button-favorite-mark';
import { AppRoute } from '../../const';


const nameCard = {
  Favorite: {
    articleContainer: 'favorites__card place-card',
    imageWrapper: {
      name: 'favorites__image-wrapper place-card__image-wrapper',
      sizeWidth: '150',
      sizeHeight: '110',
    },
    cardInfo: 'favorites__card-info place-card__info',
  },
  Normal: {
    articleContainer: 'cities__place-card place-card',
    imageWrapper: {
      name: 'cities__image-wrapper place-card__image-wrapper',
      sizeWidth: '260',
      sizeHeight: '200',
    },
    cardInfo: 'place-card__info',
  },
  Near: {
    articleContainer: 'near-places__card place-card',
    imageWrapper: {
      name: 'near-places__image-wrapper place-card__image-wrapper',
      sizeWidth: '260',
      sizeHeight: '200',
    },
    cardInfo: 'place-card__info',
  },
};

type PlaceCardProps = {
  offerItem: Offer;
  typeCard: 'Favorite' | 'Normal' | 'Near';
  onListPlaceHover?: (placeId: number) => void;
}

function PlaceCard({offerItem, typeCard, onListPlaceHover}: PlaceCardProps): JSX.Element {
  const attributeCard = nameCard[typeCard];

  const {price, title, previewImage, type, rating, id, isPremium, isFavorite} = offerItem;

  const mouseOverHandler = () => {
    setMouseOver(id);
    if (onListPlaceHover) {
      onListPlaceHover(id);
    }
  };
  const mouseOutHandler = () => {
    setMouseOver(-1);
    if (onListPlaceHover) {
      onListPlaceHover(-1);
    }
  };

  const [mouseOver, setMouseOver] = useState(-1);

  return (
    <article className={attributeCard.articleContainer} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={attributeCard.imageWrapper.name}>
        <Link to={generatePath(AppRoute.Room, {id: String(mouseOver)})}>
          <img className="place-card__image"
            src={previewImage}
            width={attributeCard.imageWrapper.sizeWidth}
            height={attributeCard.imageWrapper.sizeHeight}
            alt="Place"
          />
        </Link>
      </div>
      <div className={attributeCard.cardInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavoriteMark isFavorite={isFavorite} size='Small' typeMark='Place' hotelId={String(id)}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getPercRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, {id: String(mouseOver)})}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default React.memo(PlaceCard);
