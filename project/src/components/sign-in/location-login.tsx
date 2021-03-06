import { Link } from 'react-router-dom';
import { AppRoute, CITIES, RANDOM_INDEX } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/main-process/main-process';

function LocationLogin(): JSX.Element {

  const randomCity = CITIES[RANDOM_INDEX];
  const dispatch = useAppDispatch();

  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link"
          to={AppRoute.Main}
          onClick={() => dispatch(changeCity(randomCity))}
        >
          <span>{randomCity}</span>
        </Link>
      </div>
    </section>
  );
}

export default LocationLogin;
