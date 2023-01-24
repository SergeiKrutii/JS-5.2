const createMarkupForOne = country => {
  const normalData = country.map(
    ({ name, flags: { svg }, capital, population, languages }) => {
      const langCountry = languages.flatMap(item => ' ' + item.name);
      return { name, flags: { svg }, capital, population, langCountry };
    }
  );

  const markupOne = normalData
    .map(
      ({ name, flags: { svg }, capital, population, langCountry }) =>
        `
    <li class='forOne__item'>
    <p class='forOne__title'><img class='forOne__img' src="${svg}" alt="${name}"'>${name}</p>
    <p class='forOne__capital'><strong>Capital:</strong> ${capital}</p>
    <p class='forOne__population'><strong>Population:</strong> ${population}</p>
    <p class='forOne__languages'><strong>Languages:</strong> ${langCountry}</p>
    </li>
`
    )
    .join('');

  return markupOne;
};

const createMarkupForAll = country => {
  const markupAll = country
    .map(
      ({ name, flags: { svg } }) => `
        <li class='forAll_item'>
        <p class='forAll_capital'><img class='forAll_image' src="${svg}" alt="${name}">${name}</p>
        </li>  
        `
    )
    .join('');
  return markupAll;
};

export { createMarkupForOne, createMarkupForAll };
