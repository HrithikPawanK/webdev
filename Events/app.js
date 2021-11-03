const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('you clicked me!');
}

function scream(){
    console.log('AHHHHH!');
    console.log('stop it!');
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('clicked');
})

// advantage of using addEventListener
// we can add one or more call back functions to the same attribute and they will execute in order
// where as in direct methods they'll overide

// we can {once : true} as another parameter