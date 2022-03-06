import {Offer} from '../../mocks/offers';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import getPercRating from '../../utils';
import ButtonFavoriteMark from '../button-favorite-mark/button-favorite-mark';


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
};

type PlaceCardProps = {
  offerItem: Offer;
  typeCard: 'Favorite' | 'Normal';
}

function FavoritePlaceCard({offerItem, typeCard}: PlaceCardProps): JSX.Element {
  const className = nameCard[typeCard];

  const {price, title, previewImage, type, rating, id, isPremium, isFavorite} = offerItem;

  const mouseOverHandler = () => {
    setMouseOver(id);
  };
  const mouseOutHandler = () => {
    setMouseOver(-1);
  };

  const [mouseOver, setMouseOver] = useState(-1);

  return (
    <article className={className.articleContainer} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
      {
        (isPremium) &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={className.imageWrapper.name}>
        <Link to={`/offer/${String(mouseOver)}`}>
          <img className="place-card__image"
            src={previewImage}
            width={className.imageWrapper.sizeWidth}
            height={className.imageWrapper.sizeHeight}
            alt="Place"
          />
        </Link>
      </div>
      <div className={className.cardInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavoriteMark isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getPercRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${String(mouseOver)}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
