import { Link } from 'react-router-dom';
import { CITIES } from '../../const';
import { useAppDispatch} from '../../hooks/index';
import { changeCity } from '../../store/action';

type ListProps = {
  selectedCity: string;
}

function ListCities({selectedCity}: ListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((cityItem) => (
            <li className="locations__item"
              key={cityItem}
              onClick={() => dispatch(changeCity(cityItem))}
            >
              <Link to='/' className={`locations__item-link tabs__item ${(selectedCity === cityItem)? 'tabs__item--active' : ' '}`}>
                <span>{cityItem}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ListCities;
