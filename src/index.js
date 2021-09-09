import './sass/main.scss';
import fetchCountries from './js/fetchCountries.js';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import makeCountry from './templates/country.hbs';
import makeCountryList from './templates/country-list.hbs';
import refs from './js/refs';
const debounce = require('lodash.debounce');

const onCountrySearch = evt => {
  const inputCountry = evt.target.value;
  fetchCountries(inputCountry)
    .then(data => {
      if (data.length === 1) {
        const dataArea = makeCountryList(data[0]);
        return renderCountry(dataArea);
      }
      if (2 <= data.length && data.length < 10) {
        const dataArea = makeCountry(data);
        return renderCountry(dataArea);
      }
      if (data.length >= 10) {
        renderCountry();
        return error({
          text: 'Too many matches. Please enter a more specific query',
          delay: 1000,
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};
function renderCountry(country = '') {
  refs.listCountry.innerHTML = country;
}
refs.inputRef.addEventListener('input', debounce(onCountrySearch, 500));
