import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { FavoriteOffer } from '../../mocks/favoriteOffers';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


type AppProps = {
  favoriteOffers: FavoriteOffer[];
}

function App({favoriteOffers}: AppProps): JSX.Element {

  const offers= useAppSelector((state) => state.offers);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers}/>}
        />
        <Route path={AppRoute.Room}
          element={
            <Room offers={offers}/>
          }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Favorites}
          element= {
            <PrivateRoute
              authorizationStatus={useAppSelector((state) => state.authorizationStatus)}
            >
              <Favorites favoriteOffers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>

    </HistoryRouter>
  );
}

export default App;
