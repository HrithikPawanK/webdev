// fetch is newer version 
// it returns promise

// with promise
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log('response waiting to parse', res)   // fetch returns promise as soon as promise is resolved 
                                                        // as soon as headers arrives it returns so data might not be present
        return res.json() // so we return another promise which waits till actual data arrives
    })
    .then(data => {
        console.log('data parsed..', data.ticker.price) // this is for the res.json() promise
    })
    .catch(err => {
        console.log('oh no', err)
    })

// with async
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    } catch {
        console.log('something went wrong')
    }
    
}

fetchBitcoinPrice()



