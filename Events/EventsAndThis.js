const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

const buttons = document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click', () => {
        button.style.backgroundColor = randomColor();   
    })
}

// if the same thing we want to do for diffent elements we need to write the same thing again for them

// to make it easy we use this keyword

const h1s = document.querySelectorAll('h1');
for(let h1 of h1s){
    h1.addEventListener('click', colorize);
}

function colorize(){
    this.style.backgroundColor = randomColor();
}


