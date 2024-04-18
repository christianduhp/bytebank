import selectCoin from "./script/showCurrencyInfo.js";
import ShowComboBoxes from "./script/showCmbValues.js";

let workerCurrency = new Worker("./script/workerCurrency.js");

function getTime() {
  let date = new Date();
  let time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return time;
}

function addData(graph, label, data, titleLabel) {
  graph.data.labels.push(label);
  graph.data.datasets[0].label = titleLabel;
  graph.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });

  graph.update();
}

const currencyGraph = document.getElementById("currencyGraph");
const graph = new Chart(currencyGraph, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        borderColor: "#0C0C14",
        backgroundColor: "#0C0C14",
        label: "",
        data: [],
        borderWidth: 1,
      },
    ],
  },
});

function getCurrencyFrom() {
  const convertFrom = document.getElementById("convertFrom");
  convertFrom.addEventListener("change", (currencyKey) => {
    const selectedValue = currencyKey.target.value;
    workerCurrency.postMessage({ type: "CurrencyFrom", value: selectedValue });
  });
}

function getCurrencyTo() {
  const convertTo = document.getElementById("convertTo");
  convertTo.addEventListener("change", (currencyKey) => {
    const selectedValue = currencyKey.target.value;
    workerCurrency.postMessage({ type: "CurrencyTo", value: selectedValue });
  });
}

workerCurrency.addEventListener("message", (event) => {
  let time = getTime();
  let coinValue = event.data.ask;
  let coinName = event.data.name;
  let coinCodeFrom = event.data.code;
  let coinCodeTo = event.data.codein;

  let titleLabel = selectCoin(coinName, coinValue, coinCodeFrom, coinCodeTo);

  addData(graph, time, coinValue, titleLabel);
});

document.addEventListener("DOMContentLoaded", function () {
  const logoContainer = document.querySelector(".logo_container");
  const userContainer = document.querySelector(".user_container");
  const logoContainerIcon = document.querySelector(".logo_container__arrow");

  logoContainer.addEventListener("click", function () {
    userContainer.classList.toggle("expanded");
    logoContainerIcon.classList.toggle("expanded");
  });
});

getCurrencyFrom();
getCurrencyTo();
ShowComboBoxes();
