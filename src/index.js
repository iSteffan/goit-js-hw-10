import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

function countrySearch(event) {
  const countryName = event.target.value.trim();
  // cleanHtml(); // очистка списку та інформації

  // перевірка від зворотнього - чи значення НЕ пусте
  // if (trimmedValue !== '') {
  // отримання списку країн
  fetchCountries(countryName).then(countryData => {
    console.log(countryData);
    if (countryData.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
    } else if (countryData.length === 0) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    } else if (countryData.length >= 2 && countryData.length <= 10) {
      renderCountriesList();
    } else {
      renderFoundCountry();
    }
  });
}
