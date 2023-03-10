import './css/styles.css';
import { fetchCountries } from './api.js/fetchCountries';
import { refs } from './api.js/refs';
import { Notify } from '../node_modules/notiflix/build/notiflix-notify-aio';
import { createMarkupForAll, createMarkupForOne } from './api.js/data-markup';
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(findCountry, DEBOUNCE_DELAY));

async function findCountry(e) {
  e.preventDefault();
  const inputValue = refs.input.value.trim();
  if (inputValue.length === 0) {
    refs.div.innerHTML = '';
    return;
  }

  try {
    const countries = await fetchCountries(inputValue);
    console.log(countries);
    if (countries.length === 1) {
      let markupforOne = createMarkupForOne(countries);
      refs.div.innerHTML = markupforOne;
    } else {
      Notify.info(
        'Too many matches found... Please enter a more specific name.'
      );
      refs.div.innerHTML = '';
    }
    if (countries.length >= 2 && countries.length <= 10) {
      let markupForAll = createMarkupForAll(countries);
      refs.div.innerHTML = markupForAll;
    }
  } catch (error) {
    Notify.failure('Oops, there is no country with that name');
    refs.div.innerHTML = '';
  }
}

//   fetchCountries(inputValue)
//     .then(countries => {
// if (countries.length === 1) {
//   let markupforOne = createMarkupForOne(countries);
//   refs.div.innerHTML = markupforOne;
// } else {
//   Notify.info(
//     'Too many matches found... Please enter a more specific name.'
//   );
//   refs.div.innerHTML = '';
//       }
//       if (countries.length >= 2 && countries.length <= 10) {
//         let markupForAll = createMarkupForAll(countries);
//         refs.div.innerHTML = markupForAll;
//       }
//     })
//     .catch(err => {
// if (err.message) {
//   Notify.failure('Oops, there is no country with that name');
//   refs.div.innerHTML = '';
// }
//     });
