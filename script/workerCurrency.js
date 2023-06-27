let sourceCurrency = "USD";
let targetCurrency = "BRL";

async function fetchAPI(sourceCurrency, targetCurrency) {
  // Make an API call to get the conversion rate between the currencies
  const conversionResponse = await fetch(
    `https://economia.awesomeapi.com.br/json/last/${sourceCurrency}-${targetCurrency}`
  );

  if (conversionResponse.status === 200) {
    const conversionJson = await conversionResponse.json();
    const conversionKey = sourceCurrency + targetCurrency;
    postMessage(conversionJson[conversionKey]);
  } else {
    // Perform the conversion using "USD" 
    await performConversion("USD");

  }
}

async function performConversion(baseCurrency) {
    
  // Make an API call to get the conversion rate between the base currency and the source currency
  const sourceConversionResponse = await fetch(
    `https://economia.awesomeapi.com.br/json/last/${baseCurrency}-${sourceCurrency}`
  );
  const sourceConversionJson = await sourceConversionResponse.json();
  const sourceConversionKey = baseCurrency + sourceCurrency;
  const sourceConversionRate = sourceConversionJson[sourceConversionKey]?.ask;

  // Make an API call to get the conversion rate between the base currency and the target currency
  const targetConversionResponse = await fetch(
    `https://economia.awesomeapi.com.br/json/last/${baseCurrency}-${targetCurrency}`
  );
  const targetConversionJson = await targetConversionResponse.json();
  const targetConversionKey = baseCurrency + targetCurrency;
  const targetConversionRate = targetConversionJson[targetConversionKey]?.ask;

  // Check if the obtained conversion rates are valid
  if (sourceConversionRate && targetConversionRate) {
    // Perform the conversion calculation and create an object with the values
    const conversion = (1 / (sourceConversionRate / targetConversionRate)).toFixed(4);
    
    const sourceCurrencyName = await getCurrencyName(sourceCurrency);
    const targetCurrencyName = await getCurrencyName(targetCurrency);

    const conversionObject = {
      code: `${sourceCurrency}`,
      codein: `${targetCurrency}`,
      name: `${sourceCurrencyName}/${targetCurrencyName}`,
      ask: `${conversion}`,
    };

    postMessage(conversionObject);
  }
}

function getCurrencyName(key) {
  return fetch('../script/currencyCode.json')
    .then(response => response.json())
    .then(currencyJson => {
      value = currencyJson[key];
      return value;
    });
}

self.onmessage = function (event) {
    if (event.data.type === 'CurrencyFrom') {
      sourceCurrency = event.data.value;
    } else if (event.data.type === 'CurrencyTo') {
      targetCurrency = event.data.value;
    }
  
    fetchAPI(sourceCurrency, targetCurrency);
    setInterval(() => fetchAPI(sourceCurrency, targetCurrency), 3000);
  };

fetchAPI(sourceCurrency, targetCurrency);
setInterval(() => fetchAPI(sourceCurrency, targetCurrency), 3000);
