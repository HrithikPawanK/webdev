const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if(r + g + b < 100){
        return 'rbg(255,255,255)';
    }
    const newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}