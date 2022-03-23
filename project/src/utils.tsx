import { Offer } from './types/offer';

const PERC_STAR = 20;

export function getPercRating(rating: number) {
  return Math.round(rating)*PERC_STAR;
}

export function getListCity(offers: Offer[]) {
  const allCities = offers.map((offer) =>(offer.city.name));
  const listCity = Array.from(new Set(allCities));

  return listCity;
}
