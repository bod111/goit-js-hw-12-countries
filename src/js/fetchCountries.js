// const debounce = require('lodash.debounce');
// console.log('debounce', debounce);

export default function (searchQuery) {
  const BASE_JSON_URL = 'https://restcountries.eu/rest/v2/name';
  return fetch(`${BASE_JSON_URL}/${searchQuery}`).then(response => response.json());
  // .then(data => {
  //   console.log('data', data);
  //   if (data.length === 1) {
  //     const dataArea = makeCountryList(data[0]);
  //     return renderCountry(dataArea);
  //   }
  //   if (1 < data.length && data.length < 20) {
  //     const dataArea = makeCountry(data);
  //     // console.log('dataArea', dataArea);
  //     return renderCountry(dataArea);
  //   }
  //   if (data.length >= 20) {
  //     renderCountry();
  //     return error({
  //       text: 'Too many matches. Please enter a more specific query',
  //       delay: 1000,
  //     });
  //   }
  // })
  // .catch(err => {
  //   console.log(err);
  // })
}
// export default fetchCountries;
