import MainHeader from '../main-header/main-header';
import { Offer } from '../../mocks/offers';
import { useState } from 'react';
import PlaceCardList from '../place-card-list/place-card-list';
import Map from '../map/map';
import { CITIES } from '../../const';
import { useAppSelector } from '../../hooks/index';

import ListCities from '../list-cities/list-cities';

type MainProps = {
  countOffer: number;
  offers: Offer[];
}

function Main({countOffer, offers}: MainProps): JSX.Element {

  const {index} = useAppSelector((state) => state);

  const selectedCity = CITIES[index];

  const selectedCityIndex = offers.findIndex((offer) => offer.city.name === selectedCity);
  const cityLocation = offers[selectedCityIndex];

  const offersInCity = offers.filter((offer) => offer.city.name === selectedCity);

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const onListPlaceHover = (placeId: number) => {
    let currentPoint;

    if (placeId !== -1) {
      const currentIndex = offersInCity.findIndex((place) => place.id === placeId);
      const {title} = offersInCity[currentIndex];
      currentPoint = offersInCity.find((place) => place.title === title);
    }

    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <MainHeader activeLogo />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <ListCities indexCity={index} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{countOffer} places to stay in {selectedCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex = {0}>
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex = {0}>Popular</li>
                  <li className="places__option" tabIndex = {0}>Price: low to high</li>
                  <li className="places__option" tabIndex = {0}>Price: high to low</li>
                  <li className="places__option" tabIndex = {0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList
                  offers={offersInCity}
                  onListPlaceHover={onListPlaceHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                points={offersInCity}
                location={cityLocation.city.location}
                selectedPoint={selectedPoint}
                typePage='MainPage'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
