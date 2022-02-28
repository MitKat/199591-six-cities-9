import { Offer } from '../../mocks/offers';
import Logo from '../logo/logo';
import MainHeader from '../main-header/main-header';
import FavoritesListPlaces from './favorites-list-places';

// const CityName = {
//   Paris: 'Paris',
//   Cologne: 'Cologne',
//   Brussels: 'Brussels',
//   Amsterdam: 'Amsterdam',
//   Hamburg: 'Hamburg',
//   Dusseldorf: 'Dusseldorf',
// } as const;

type FavoritesProps = {
  offers: Offer[];
}

function Favorites({offers}: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <MainHeader activeLogo={false} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                offers.map((offer) =>
                  (
                    <li className="favorites__locations-items" key={offer.id}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href=" ">
                            <span>{offer.city.name}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        <FavoritesListPlaces offers={offers} />
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
