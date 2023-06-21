import selectCoin from "./printPrice.js";

function getTime() {
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

  return time
}
function addData(graph, label, data) {
  graph.data.labels.push(label)
  graph.data.datasets.forEach(dataset => {
    dataset.data.push(data)
  })

  graph.update();

}

const graphDolar = document.getElementById('graphDolar')
const graphToDolar = new Chart(graphDolar, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Dólar',
      data: [],
      borderWidth: 1
    }]
    
  }
});

let workerDolar = new Worker('./script/workers/workerDolar.js')
workerDolar.postMessage('USD')

workerDolar.addEventListener("message", event => {
  let time = getTime();
  let coinValue = event.data.ask;
  selectCoin("dolar", coinValue)
  addData(graphToDolar, time, coinValue)
})


const graphIene = document.getElementById('graphIene')
const graphToIene = new Chart(graphIene, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Iene',
      data: [],
      borderWidth: 1
    }]
  }
});


let workerIene = new Worker('./script/workers/workerIene.js')
workerIene.postMessage('JPY')

workerIene.addEventListener("message", event => {
  let time = getTime();
  let coinValue = event.data.ask;
  selectCoin("iene", coinValue)
  addData(graphToIene, time, coinValue)
})


const graphEuro = document.getElementById('graphEuro')
const graphToEuro = new Chart(graphEuro, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Euro',
      data: [],
      borderWidth: 1
    }]
  }
});


let workerEuro = new Worker('./script/workers/workerEuro.js')
workerEuro.postMessage('Euro')

workerEuro.addEventListener("message", event => {
  let time = getTime();
  let coinValue = event.data.ask;
  selectCoin("euro", coinValue)
  addData(graphToEuro, time, coinValue)
})



// O que fazer para completar o curso:  manter um gráfico só mas com dois 
// combo-box para o usuario escolher qual moeda quer converter 
// e usar dom para evitar que seja feito tanto html e workers 