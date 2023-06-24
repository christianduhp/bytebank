let currencyFromValue;
let currencyToValue;

async function fetchAPI(convertFrom,convertTo) {

    const convertCoin = await fetch(`https://economia.awesomeapi.com.br/json/last/${convertFrom}-${convertTo}`)
    const convertCoinJson = await convertCoin.json()
    
    const convertFromTo = convertFrom + convertTo
    postMessage(convertCoinJson[convertFromTo])

}

self.onmessage = function(event) {
    if (event.data.type === 'CurrencyFrom') {
         currencyFromValue = event.data.value;
       
    } else if (event.data.type === 'CurrencyTo') {
         currencyToValue = event.data.value;

    }

    fetchAPI(currencyFromValue,currencyToValue)
    setInterval(() => fetchAPI(currencyFromValue,currencyToValue), 5000)
};

currencyFromValue = 'USD'
currencyToValue = 'BRL'
fetchAPI(currencyFromValue,currencyToValue)
setInterval(() => fetchAPI(currencyFromValue,currencyToValue), 1000)