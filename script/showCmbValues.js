function fetchCurrencyCodes() {
    return fetch('../script/currencyCode.json')
        .then(response => response.json())
        .then(currencyJson => {
            currencyJson = sortCurrencies(currencyJson);
            return currencyJson;
        });
}

function sortCurrencies(currencyJson) {
    const entries = Object.entries(currencyJson);
    const sortedEntries = entries.sort((currencyA, currencyB) => currencyA[1].localeCompare(currencyB[1]));

    const sortedJsonData = {};
    sortedEntries.forEach(entry => {
      sortedJsonData[entry[0]] = entry[1];
    });

    return sortedJsonData;
  }
  
function showCurrenciesInComboBoxes() {
    
    const convertFrom = document.getElementById('convertFrom');
    const convertTo = document.getElementById('convertTo');

    return fetchCurrencyCodes()
        .then(currencyJson => {
            const currenciesValue = Object.values(currencyJson);
            const currenciesKeys = Object.keys(currencyJson);

            currenciesValue.forEach((currency, key) => {
                const optionFrom = document.createElement('option');
                optionFrom.value = currenciesKeys[key];
                optionFrom.text = currency + " (" + currenciesKeys[key] + ")";
                optionFrom.id = currenciesKeys[key];
                convertFrom.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = currenciesKeys[key];
                optionTo.text = currency + " (" + currenciesKeys[key] + ")";
                optionTo.id = currenciesKeys[key];
                convertTo.appendChild(optionTo);
            });
        });
}

export default showCurrenciesInComboBoxes
