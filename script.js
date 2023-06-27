import selectCoin from "./script/showCurrencyInfo.js";
import ShowComboBoxes from "./script/showCmbValues.js";

let workerCurrency = new Worker('./script/workerCurrency.js');

function getTime() {
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

  return time
}

function addData(graph, label, data, titleLabel) {
  graph.data.labels.push(label)
  graph.data.datasets[0].label = titleLabel;
  graph.data.datasets.forEach(dataset => {
    dataset.data.push(data)
  })

  graph.update();

}

const currencyGraph = document.getElementById('currencyGraph')
const graph = new Chart(currencyGraph, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '' ,
      data: [],
      borderWidth: 1
    }]
    
  }
});

function getCurrencyFrom() {
    const convertFrom = document.getElementById('convertFrom');
    convertFrom.addEventListener("change", (currencyKey) => {
        const selectedValue = currencyKey.target.value;   
        workerCurrency.postMessage({ type: 'CurrencyFrom', value: selectedValue });
        
    });
}

function getCurrencyTo() {
    const convertTo = document.getElementById('convertTo');
    convertTo.addEventListener("change", (currencyKey) => {
        const selectedValue = currencyKey.target.value;
        workerCurrency.postMessage({ type: 'CurrencyTo', value: selectedValue });
    });
}

workerCurrency.addEventListener("message", event => {
  let time = getTime();
  let coinValue = event.data.ask;
  let coinName = event.data.name;
  let titleLabel = selectCoin(coinName, coinValue)

  selectCoin(coinName, coinValue)
  addData(graph, time, coinValue, titleLabel)
  
})

getCurrencyFrom()
getCurrencyTo()
ShowComboBoxes()
