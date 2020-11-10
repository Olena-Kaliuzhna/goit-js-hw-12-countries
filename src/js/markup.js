import oneCountryTpl from '../templates/oneCountrysCard.hbs';
import countriesTpl from '../templates/countries.hbs';

import refs from "./getRefs";

export function markupCountiesList(countries) {
  const markup = countriesTpl(countries);
  refs.cardContainerEl.insertAdjacentHTML('beforeend', markup);
}

export function markupCountryCard(country) {
  const markup = oneCountryTpl(country);
  refs.cardContainerEl.insertAdjacentHTML('beforeend', markup);
}