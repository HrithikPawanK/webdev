// await --> waits untill promise is resolved
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(color);
            resolve()
        }, delay)
    })
}

// replacing .then() with await :)

async function rainbow(){
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return 'all done'
}

// rainbow()
//     .then(() => console.log('end of rainbow'))

// we can also do the above thing by creating another async function

async function printRainbow(){
    await rainbow();
    console.log('end of rainbow')
}

printRainbow();