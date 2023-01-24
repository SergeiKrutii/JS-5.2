const BASE_URL = 'https://restcountries.com/v2/name/';
const filterRespons = 'name,capital,population,flags,languages';

const fetchCountries = country => {
  return fetch(`${BASE_URL}${country}?fields=${filterRespons}`).then(
    responce => {
      if (responce.status === 404) {
        return Promise.reject(new Error('Enter country!!'));
      }
      return responce.json();
    }
  );
};

export { fetchCountries };
