function fetchCurrencyCodes() {
    // Fetch the currency codes from the JSON file
    return fetch('./script/currencyCode.json')
      .then(response => response.json())
      .then(currencyJson => {
        currencyJson = sortCurrencies(currencyJson);
        return currencyJson;
      });
  }
  
  function sortCurrencies(currencyJson) {
    // Sort the currencies alphabetically by their names
    const entries = Object.entries(currencyJson);
    const sortedEntries = entries.sort((currencyA, currencyB) => currencyA[1].localeCompare(currencyB[1]));
  
    const sortedJsonData = {};
    sortedEntries.forEach(entry => {
      sortedJsonData[entry[0]] = entry[1];
    });
  
    return sortedJsonData;
  }
  
  function showCurrenciesInComboBoxes() {
    // Get the convertFrom and convertTo elements
    const convertFrom = document.getElementById('convertFrom');
    const convertTo = document.getElementById('convertTo');
  
    return fetchCurrencyCodes()
      .then(currencyJson => {
        const currenciesValue = Object.values(currencyJson);
        const currenciesKeys = Object.keys(currencyJson);
  
        currenciesValue.forEach((currency, key) => {
          // Create an option element for convertFrom
          const optionSource = document.createElement('option');
          optionSource.value = currenciesKeys[key];
          optionSource.text = currency + " (" + currenciesKeys[key] + ")";
          optionSource.id = currenciesKeys[key];
          convertFrom.appendChild(optionSource);
  
          // Create an option element for convertTo
          const optionTarget = document.createElement('option');
          optionTarget.value = currenciesKeys[key];
          optionTarget.text = currency + " (" + currenciesKeys[key] + ")";
          optionTarget.id = currenciesKeys[key];
          convertTo.appendChild(optionTarget);
        });
  
        // Set the default selected option for convertFrom as USD
        const defaultFromOption = convertFrom.querySelector(`option[value="USD"]`);
        defaultFromOption.selected = true;
  
        // Set the default selected option for convertTo as BRL
        const defaultToOption = convertTo.querySelector(`option[value="BRL"]`);
        defaultToOption.selected = true;
      });
  }
  
export default showCurrenciesInComboBoxes
