import Logo from '../logo/logo';
import MainHeader from '../main-header/main-header';
import FavoritePlaceCard from './favorite-place-card';


function Favorites(): JSX.Element {
  return (
    <div className="page">
      <MainHeader activeLogo={false} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href=" ">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritePlaceCard />
                  <FavoritePlaceCard />
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href=" ">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <FavoritePlaceCard />
                </div>
              </li>
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
