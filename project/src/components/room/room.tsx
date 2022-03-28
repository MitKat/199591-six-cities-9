import MainHeader from '../main-header/main-header';
import Reviews from '../reviews/reviews';
import { getPercRating } from '../../utils';
import HostUser from './host-user';
import FormNewComment from '../form-new-comment/form-new-comment';
import { useParams } from 'react-router-dom';
import ListNearPlaces from './list-near-places';
import Map from '../map/map';
import ButtonFavoriteMark from '../button-favorite-mark/button-favorite-mark';
import useScrollTop from '../../hooks/use-scroll-top';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchHotelAction, fetchHotelsNearbyAction, fetchReviewsAction } from '../../store/api-actions';


import { useEffect } from 'react';

function Room(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const reviews = useAppSelector((state) => state.reviews);
  const hotel = useAppSelector((state) => state.hotel);
  const hotelsNearby = useAppSelector((state) => state.hotelsNearby);

  useScrollTop();

  useEffect(() => {
    dispatch(fetchHotelAction(String(id)));
    dispatch(fetchReviewsAction(String(id)));
    dispatch(fetchHotelsNearbyAction(String(id)));
  }, [id, dispatch]);

  const {title, images, rating, city,  type, bedrooms, maxAdults, description, price, goods, isPremium, isFavorite} = hotel;
  return (
    <div className="page">
      <MainHeader activeLogo={false} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <ButtonFavoriteMark isFavorite={isFavorite} size='Big' typeMark='Property' />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getPercRating(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((name) => (
                    <li className="property__inside-item" key={name}>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  {<HostUser offer={hotel} />}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <Reviews reviews={reviews} />
                {(authorizationStatus === AuthorizationStatus.Auth) && <FormNewComment />}
              </section>
            </div>
          </div>
          <Map
            points={hotelsNearby}
            location={city.location}
            selectedPoint={hotel}
            typePage='PropertyPage'
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListNearPlaces offers={hotelsNearby.slice(0, 3)} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
