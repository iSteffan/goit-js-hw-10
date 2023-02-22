import './css/styles.css';
// import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries(name) {
  const url = `${BASE_URL}/v3.1/name/${name}`;

  return (
    fetch(url)
      // .then(response => response.json())
      .then(country => {
        console.log(country);
      })
  );
}

const refs = {
  input: document.getElementById('search-box'),
};

refs.input.addEventListener('input', debounce(countrySearch, DEBOUNCE_DELAY));

function countrySearch(event) {
  console.log(event.currentTarget.value);
  fetchCountries(event.currentTarget.value);
}
