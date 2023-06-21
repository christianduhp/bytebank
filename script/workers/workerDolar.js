async function fetchAPI() {
    const convertCoin = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    const convertCoinJson = await convertCoin.json()

    postMessage(convertCoinJson.USDBRL)
    
}

addEventListener("message", () => {
    fetchAPI()
    setInterval(() => fetchAPI(), 5000)
})