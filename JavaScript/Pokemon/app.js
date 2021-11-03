const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/';
function zeros(n){
    if(n < 10){
        return '00' + n;
    }
    else if(n < 100){
        return '0' + n;
    }
    else if(n < 1000){
        return n;
    }
}
for(let i = 1; i <= 200; i++){
    const pokemon = document.createElement('div');
    const newImg = document.createElement('img');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    newImg.src = `${baseURL}${zeros(i)}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}