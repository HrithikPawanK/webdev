const input = document.querySelector('input');
// 'change' -> will trigger only when we type something different and came out of input(cursor).
// 'input' -> it will trigger for every character input
const h1 = document.querySelector('h1');
input.addEventListener('input', () => {
    h1.innerText = input.value;
})