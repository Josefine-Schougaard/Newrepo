let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let messagebox1 = document.querySelector('#message1');
let messagebox2 = document.querySelector('#message2');

input1.addEventListener('keydown',()=>{
    let message = '<p>Du  skriver i input 1</p>';
    messagebox1.innerHTML = message;
});
