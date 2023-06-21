async function fetchAPI() {
    const convertCoin = await fetch("https://economia.awesomeapi.com.br/json/last/JPY-BRL")
    const convertCoinJson = await convertCoin.json()

    postMessage(convertCoinJson.JPYBRL)
    
}

addEventListener("message", () => {
    fetchAPI()
    setInterval(() => fetchAPI(), 5000)
})