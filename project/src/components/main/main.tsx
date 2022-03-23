import MainHeader from '../main-header/main-header';
import { Offer } from '../../types/offer';
import { useState } from 'react';
import PlaceCardList from '../place-card-list/place-card-list';
import Map from '../map/map';
import { TypeSort } from '../../const';
import { useAppSelector } from '../../hooks/index';

import ListCities from '../list-cities/list-cities';
import EmptyPlaceCardList from '../empty-place-card-list/empty-place-card-list';
import FormSortPlaces from '../sort-places/sort-places';
import LoadingScreen from '../loading-screen/loading-screen';

type MainProps = {
  offers: Offer[];
}

function Main({offers}: MainProps): JSX.Element {
  const {currentCity, currentSort, isDataLoaded} = useAppSelector((state) => state);
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(undefined);

  const currentCityIndex = offers.findIndex((offer) => offer.city.name === currentCity);
  const cityLocation = offers[currentCityIndex];

  let offersInCity= offers.filter((offer) => offer.city.name === currentCity);

  switch (currentSort) {
    case TypeSort.PriceUp:
      offersInCity = [...offersInCity].sort((offerA, offerB) => (offerA.price - offerB.price));
      break;
    case TypeSort.PriceDown:
      offersInCity = [...offersInCity].sort((offerA, offerB) => (offerB.price - offerA.price));
      break;
    case TypeSort.Rating:
      offersInCity = [...offersInCity].sort((offerA, offerB) => (offerB.rating - offerA.rating));
      break;
  }

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
        <ListCities selectedCity={currentCity} />
        {!isDataLoaded ?
          <LoadingScreen />
          :
          <div className="cities">
            { (offersInCity.length === 0) ?
              <EmptyPlaceCardList city={currentCity} />
              :
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersInCity.length} places to stay in {currentCity}</b>
                  <FormSortPlaces currentSort={currentSort} />
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
              </div>}
          </div>}
      </main>
    </div>
  );
}

export default Main;
