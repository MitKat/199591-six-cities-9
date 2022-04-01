import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/main-process/main-process';
import { getRandomNumber } from '../../utils';


function LocationLogin(): JSX.Element {
  const randomIndex = Number(getRandomNumber(0, CITIES.length-1));
  const randomCity = CITIES[randomIndex];
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
