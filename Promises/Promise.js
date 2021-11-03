const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) resolve('YOUR FAKE DATA HERE')
            else reject('Request Error!')
        }, 1000)
    })
}

fakeRequest('amazon.com')
    .then((data) => {
        console.log('DONE WITH REQUEST')
        console.log(data)
        return fakeRequest('amazon.com/page1')
    })
    .then((data) => {
        console.log('DONE WITH REQUEST 2')
        console.log(data)
    })
    .catch((err) => {
        console.log('OH NO!', err)
    })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(color);
            resolve()
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('indigo', 1000))

