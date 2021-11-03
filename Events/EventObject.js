document.querySelector('button').addEventListener('click', () => alert('CLICK'));
const input = document.querySelector('input');
// event object is automatically into the call backfunction
// it contains information about that event     
input.addEventListener('keydown', function(e){
    console.log(e.key, e.code) // a KeyA    
});