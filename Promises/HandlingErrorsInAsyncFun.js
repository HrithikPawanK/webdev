const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) resolve('YOUR FAKE DATA HERE')
            else reject('Request Error!')
        }, 1000)
    })
}

async function makeTwoRequests(){
    try {
        let data1 = await fakeRequest('amazon.com')
        console.log(data1)
        let data2 = await fakeRequest('facebook.com')
        console.log(data2)
    } catch (e) {
        console.log('Caught an Error')
        console.log('error is:', e)
    }
}

makeTwoRequests();