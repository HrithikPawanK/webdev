// Its a library for making Http Requests
// we need to include the github scripts src to use them.

// using promise
axios.get('https://api.cryptonator.com/api/ticker/btc-usd') // it returns promise only after every thing is finised unlike fetch. It includes all information
    .then( res => {
        console.log(res.data.ticker.price)
    })
    .catch( err => {
        console.log('Error!!', err)
    })


// using async
const fetchBitcoinPrice = async () => {
    try {
        const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(response.data.ticker.price)
    } catch(e) {
        console.log('ERROR!', e)
    }
}

fetchBitcoinPrice()

// setting headers with axios

// Accept -> content type -> json, html, xml etc  // depends on API

const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addNewJoke = async () => {  // as getDadJoke returns promise we await for that.
    const jokeText = await getDadJoke();
    const newLi = document.createElement('LI')
    newLi.classList.add('list-group-item')
    newLi.append(jokeText)
    jokes.append(newLi)
}

button.addEventListener('click', addNewJoke)

const getDadJoke = async () => {
    try {
        const config = { headers : {Accept : 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke
    } catch {
        return 'NO JOKES AVAILABLE! SORRY :('
    }
} 

