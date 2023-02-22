const BASE_URL = 'https://restcountries.com/v3.1';

export function fetchCountries(name) {
  const url = `${BASE_URL}/v3.1/name/${name}`;

  fetch(url)
    .then(response => response.json())
    .then(country => {
      console.log(country);
    });
}
