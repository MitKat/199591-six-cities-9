import { Offer } from './mocks/offers';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PERC_STAR = 20;

export function getPercRating(rating: number) {
  return Math.round(rating)*PERC_STAR;
}

export function getListCity(offers: Offer[]) {
  const allCities = offers.map((offer) =>(offer.city.name));
  const listCity = Array.from(new Set(allCities));

  return listCity;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
