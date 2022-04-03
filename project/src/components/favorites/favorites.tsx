import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesOfferAction } from '../../store/api-actions';
import { changeCity } from '../../store/main-process/main-process';
import { getListCity } from '../../utils';
import Logo from '../logo/logo';
import MainHeader from '../main-header/main-header';
import FavoritesEmptyPage from './favorites-empty-page';
import FavoritesListPlaces from './favorites-list-places';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesOffer = useAppSelector(({DATA}) => DATA.favoritesOffer);

  useEffect(() => {
    dispatch(fetchFavoritesOfferAction());
  }, [dispatch]);

  const listCity = getListCity(favoritesOffer);

  const favoritesPlacesInCity = listCity.map((city) => {
    const places = favoritesOffer.filter((offer) => offer.city.name === city);
    return {city, places};
  });

  return (
    <div className="page">
      <MainHeader activeLogo={false} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoritesOffer.length === 0  && <FavoritesEmptyPage />}
          {
            favoritesOffer.length > 0 &&
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  favoritesPlacesInCity.map((offer) =>
                    (
                      <li className="favorites__locations-items" key={offer.city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link className="locations__item-link" to={AppRoute.Main} onClick={() => dispatch(changeCity(offer.city))}>
                              <span>{offer.city}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <FavoritesListPlaces favoriteOffers={offer.places} />
                        </div>
                      </li>
                    ),
                  )
                }
              </ul>
            </section>
          }
        </div>
      </main>
      <footer className="footer container">
        <Logo type='Footer' size='Small' />
      </footer>
    </div>
  );
}

export default Favorites;
