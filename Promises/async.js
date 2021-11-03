// cleaner code for working with async code


// function with async returns promise automatically
async function hello(){ 

}
console.log(hello())

const sing = async () => {

}
console.log(sing())

// if we return something then we get Promise with return value

const test = async () => {
    return 'testing'
}
console.log(test())

test().then((data) => {
    console.log('Promise resolved with:', data)
})

// to return rejected promise we need to throw error

// throw new Error('xyz')
// throw 'xyz'

const push = async () => {
    throw new Error('oh no')
    return 'xyz'
}

// push()
//     .then( data => {
//         console.log('Promise resolved with data:', data)
//     })
//     .catch( err => {
//         console.log('Promise rejected')
//         console.log(err)
//     })

const login = async (username, password) => {   
    if(!username || !password) throw 'missing credentials'
    if(password === '#Hrithik99')  return 'WELCOME'
    throw 'invalid password'
}

login('hrithik', '#Hrithik959')
    .then(msg => {
        console.log('logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log('ERROR!!')
        console.log(err)
    })

