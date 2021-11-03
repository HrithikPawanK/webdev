const p1 = {
    score : 0,
    button : document.querySelector('#p1Button'),
    display : document.querySelector('#p1Display')
};

const p2 = {
    score : 0,
    button : document.querySelector('#p2Button'),
    display : document.querySelector('#p2Display')
};

const resetButton =  document.querySelector('#reset');
const WinningScoreSelect = document.querySelector('#playTo');
let winningScore = 6;
let isGameOver = false;
let edgeCase = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(edgeCase){
            if(player.score - opponent.score >= 2){
                isGameOver = true;
            }
        }
        else if(player.score === winningScore){
            if(player.score - opponent.score === 1){
                edgeCase = true;
            }else{
                isGameOver = true;
            }
        }
        player.display.textContent = player.score;
        if(isGameOver){
           gameOver(player, opponent);
        }
    }
};

function gameOver(player, opponent){
    player.display.classList.add('winner');
    opponent.display.classList.add('looser');
    edgeCase = false;
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
});

WinningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset(){
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'looser');
    }
};


// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor = 'yellow';
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('blue', 1000, () => {
        delayedColorChange('green', 1000, () => {

        })
    })
})

// call back hell

// fake demo request

const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000){
            failure('Connection TimeOut :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay);
}

fakeRequestCallback('amazon.com', 
    (response) => {
        console.log('It worked!!')
        console.log(response)
        fakeRequestCallback('amazon.com/page1', 
            (response) => {
                console.log('It worked again!!!')
                console.log(response)
                fakeRequestCallback('amazon.com/page1', 
                    (response) => {
                        console.log('It worked again (req2)!!!')
                        console.log(response)
                },  (error) => {
                    console.log('ERROR!! 35', error)
                })
        },  (error) => {
            console.log('ERROR!! 2', error)
        })
    },  (error) => {
        console.log('ERROR!! 1', error)
})

