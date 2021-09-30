let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let body = document.querySelector('body');

input1.addEventListener('keydown',()=>{
    let message = '<p>Du  skriver i input 1</p>';
    body.innerHTML = message;
});
