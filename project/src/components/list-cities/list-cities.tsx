import { CITIES } from '../../const';
import { useAppDispatch} from '../../hooks/index';
import { changeCity } from '../../store/action';

type ListProps = {
  indexCity: number;
}

function ListCities({indexCity}: ListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCity = CITIES[indexCity];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((cityItem, item) => (
            <li className="locations__item"
              key={cityItem}
              onClick={() => dispatch(changeCity(item))}
            >
              {(selectedCity === cityItem) ?
                <div className="locations__item-link tabs__item tabs__item--active">
                  <span>{cityItem}</span>
                </div>
                :
                <div className="locations__item-link tabs__item ">
                  <span>{cityItem}</span>
                </div>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ListCities;
