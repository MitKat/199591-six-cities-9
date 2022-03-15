import { useState } from 'react';
import { SORT_TYPE } from '../../const';
import { useAppDispatch } from '../../hooks';
import { sortPlaces } from '../../store/action';

type SortPlacesProps = {
  currentSort: string;
  indexSort: number;
}

function SortPlaces({currentSort, indexSort}: SortPlacesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={(evt) => {evt.preventDefault(); return setIsOpenOptions(!isOpenOptions);}}
    >
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type" tabIndex = {indexSort} >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpenOptions &&
        <ul className="places__options places__options--custom places__options--opened">
          {SORT_TYPE.map((name, index) => (
            (currentSort === name) ?
              <li className="places__option places__option--active"
                tabIndex = {index} key={name}
              >
                {name}
              </li>
              :
              <li className="places__option"
                tabIndex = {index}
                key={name}
                onClick={() => dispatch(sortPlaces(index))}
              >
                {name}
              </li>
          ))}
        </ul>
      }
    </form>
  );
}

export default SortPlaces;
