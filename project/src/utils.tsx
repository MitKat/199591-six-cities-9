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

export function getRandomNumber(number1: number, number2: number) {
  if (number1 < 0 || number2 < 0) {
    return null;
  }
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);

  return Math.floor(Math.random() * (max-min+1)) + min;
}
