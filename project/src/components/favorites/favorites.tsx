import { FavoriteOffer } from '../../mocks/favoriteOffers';
import { getListCity } from '../../utils';
import Logo from '../logo/logo';
import MainHeader from '../main-header/main-header';
import FavoritesListPlaces from './favorites-list-places';

type FavoritesProps = {
  favoriteOffers: FavoriteOffer[];
}

function Favorites({favoriteOffers}: FavoritesProps): JSX.Element {
  const listCity = getListCity(favoriteOffers);

  const favoritesPlacesInCity = listCity.map((city) => {
    const places = favoriteOffers.filter((offer) => offer.city.name === city);
    return {city, places};
  });

  return (
    <div className="page">
      <MainHeader activeLogo={false} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                favoritesPlacesInCity.map((offer) =>
                  (
                    <li className="favorites__locations-items" key={offer.city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href=" ">
                            <span>{offer.city}</span>
                          </a>
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
        </div>
      </main>
      <footer className="footer container">
        <Logo type='Footer' size='Small' />
      </footer>
    </div>
  );
}

export default Favorites;
