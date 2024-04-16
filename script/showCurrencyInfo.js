const list = document.querySelectorAll("[data-list]");

function selectCoin(name, coinValue) {
  const nameFromValues = [];
  list.forEach((choosenList) => {
    const nameFrom = name.split("/")[0];
    const nameTo = name.split("/")[1];

    showCurrencyInfo(choosenList, nameFrom, nameTo, coinValue);

    nameFromValues.push(nameFrom);
  });

  return nameFromValues;
}

function showCurrencyInfo(list, nameFrom, nameTo, value) {
  list.innerHTML = "";
  let multiplicator = 1;
  const listItem = document.createElement("li");
  listItem.innerHTML = `${multiplicator} ${nameFrom} = ${(
    value * multiplicator
  ).toLocaleString({ style: "currency", currency: "BRL" })} ${nameTo}`;
  list.appendChild(listItem);
}

export default selectCoin;
