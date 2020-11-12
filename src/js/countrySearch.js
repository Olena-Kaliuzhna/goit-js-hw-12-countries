const debounce = require('debounce');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';


import refs from "./getRefs";
import { markupCountiesList, markupCountryCard } from "./markup";
import fetchCountries from './fetchCountries';


refs.inputEl.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(event) {
    const searchQuery = event.target.value;    
    refs.cardContainerEl.innerHTML = '';

 fetchCountries(searchQuery).then(renderCountriesCard)
    .catch(onFetchError)
    
};

function renderCountriesCard(countries) {   
    refs.cardContainerEl.innerHTML = '';
    if (!countries.length) {
        error({
            title: 'ПРЕДУПРЕЖДЕНИЕ',
            text: 'Введите название страны',
            delay: 2000,
            
        });  return;
        
    }
    if (countries.length > 10) {
        error({
            title: 'ПРЕДУПРЕЖДЕНИЕ',
            text: 'Слишком много вариантов. Уточните, пожалуйста, запрос',
            delay: 2000,
       
        }); return;
        
    }
    if (countries.length > 1 && countries.length < 10) {
       markupCountiesList(countries)
        return;
    }
    if (countries.length = 1) {
        markupCountryCard(countries) 
        return;
    };
  
};

function onFetchError(error) {
    error({
            title: 'ПРЕДУПРЕЖДЕНИЕ',
            text: 'Введите правильно страну',
            delay: 2000,
       
        }); return;
};
