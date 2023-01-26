const BASE_URL = 'https://restcountries.com/v2/name/';
const filterRespons = 'name,capital,population,flags,languages';


const fetchCountries = async (country) => {
  const res = await fetch(`${BASE_URL}${country}?fields=${filterRespons}`);
  if (res.status === 404)  {
    return Promise.reject(new Error('Enter country!!'));
  }
  return res.json();
};



// const fetchCountries = country => {
//   return fetch(`${BASE_URL}${country}?fields=${filterRespons}`).then(
//     responce => {
//       if (responce.status === 404) {
//         return Promise.reject(new Error('Enter country!!'));
//       }
//       return responce.json();
//     }
//   );
// };

export { fetchCountries };
