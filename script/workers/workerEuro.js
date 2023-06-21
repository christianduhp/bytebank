async function fetchAPI() {
    const convertCoin = await fetch("https://economia.awesomeapi.com.br/json/last/EUR-BRL")
    const convertCoinJson = await convertCoin.json()

    postMessage(convertCoinJson.EURBRL)
    
}

addEventListener("message", () => {
    fetchAPI()
    setInterval(() => fetchAPI(), 5000)
})