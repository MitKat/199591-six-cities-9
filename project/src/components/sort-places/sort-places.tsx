import React from 'react';
import { useState } from 'react';
import { TypeSort } from '../../const';
import { useAppDispatch } from '../../hooks';
import { sortPlaces } from '../../store/main-process/main-process';

type SortPlacesProps = {
  currentSort: string;
}

function SortPlaces({currentSort}: SortPlacesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={(evt) => {evt.preventDefault(); return setIsOpenOptions(!isOpenOptions);}}
    >
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type">
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpenOptions &&
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(TypeSort).map((name, index) =>
            (
              <li className={`places__option ${(currentSort === name)? 'places__option--active' : ' '}`}
                tabIndex = {index}
                key={name}
                onClick={() => dispatch(sortPlaces(name))}
              >
                {name}
              </li>
            ))}
        </ul>
      }
    </form>
  );
}

export default React.memo(SortPlaces);
