const list = document.querySelectorAll('[data-list]')

function selectCoin(name, coinValue) {
    list.forEach((choosenList) => {
        if (choosenList.id == name) {
            printPrice(choosenList, name, coinValue);
        }
    })
}


function printPrice(list,   name, value) {
    list.innerHTML =  ''

    const plural ={
    "dolar" : "dolares",
    "iene" : "ienes",
    "euro" : "euros"
    }

    for (let multiplicator = 1; multiplicator <= 1000; multiplicator *= 10 ) {
        const listItem = document.createElement('li')
        listItem.innerHTML = `${multiplicator} ${multiplicator == 1 ? name : plural[name]}: R$${(value * multiplicator).toFixed(2)}` 
        list.appendChild(listItem)
    }
}

export default selectCoin