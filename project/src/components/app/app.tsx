import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Review } from '../../mocks/reviews';
import { FavoriteOffer } from '../../mocks/favoriteOffers';
import { useAppSelector } from '../../hooks';


type AppProps = {
  reviews: Review[];
  favoriteOffers: FavoriteOffer[];
}

function App({reviews, favoriteOffers}: AppProps): JSX.Element {

  const {offers} = useAppSelector((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers}/>}
        />
        <Route path={AppRoute.Room}
          element={
            <Room offers={offers} reviews={reviews}/>
          }
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Favorites}
          element= {
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites favoriteOffers={favoriteOffers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
