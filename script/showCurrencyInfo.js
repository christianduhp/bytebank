const list = document.querySelectorAll("[data-list]");

function selectCoin(coinName, coinValue, coinCodeFrom, coinCodeTo) {
  const nameFromValues = [];
  list.forEach((choosenList) => {
    const nameFrom = coinName.split("/")[0];
    const nameTo = coinName.split("/")[1];
    showCurrencyInfo(
      choosenList,
      nameFrom,
      nameTo,
      coinCodeFrom,
      coinCodeTo,
      coinValue
    );

    nameFromValues.push(nameFrom);
  });

  return nameFromValues;
}

function showCurrencyInfo(
  list,
  nameFrom,
  nameTo,
  coinCodeFrom,
  coinCodeTo,
  value
) {
  list.innerHTML = "";
  let multiplicator = 1;
  const listItem = document.createElement("li");

  // Extrai os códigos de país
  const countryCodeFrom = coinCodeFrom.slice(0, 2).toLowerCase();
  const countryCodeTo = coinCodeTo.slice(0, 2).toLowerCase();

  const flagFrom = `<img src="https://flagcdn.com/16x12/${countryCodeFrom}.png" alt="${nameFrom}"></img>`;
  const flagTo = `<img src="https://flagcdn.com/16x12/${countryCodeTo}.png" alt="${nameTo}"></img>`;

  listItem.innerHTML = `${flagFrom} ${multiplicator} ${nameFrom} = ${flagTo} ${(
    value * multiplicator
  ).toLocaleString({ style: "currency", currency: "BRL" })} ${nameTo}`;
  list.appendChild(listItem);
}

export default selectCoin;
