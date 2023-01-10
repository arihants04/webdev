//intext: btih
//event reference on mdn
btn = document.querySelector('#v2');
btn.onclick = function () {
    alert('clicked');

}

let boo = () => alert('boo');
btn.onmouseenter = boo;
let h1 = document.querySelector('h1');
h1.onmouseenter = () => alert('Events');
h1.style.width = ('10%');

let btn2 = document.querySelector('button:nth-of-type(2)');
btn2.addEventListener('mouseup', boo, { once: true });
btn2.addEventListener('mouseup', () => console.log('clicked!'))
let button = document.querySelector('button:nth-of-type(3)')
button.style.marginLeft = '30%'
button.addEventListener('click', (e) => console.log(e))
let input = document.querySelector('input');
input.addEventListener('keydown', (e) => console.log(e.key, e.code));
window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            alert('UP');
            break;
        case 'ArrowDown':
            alert('DOWN')
            break;
        case 'ArrowLeft':
            alert('LEFT')
            break;
        case 'ArrowRight':
            alert('RIGHT')
            break;
    }
});
const form = document.querySelector('form');
const input2 = document.querySelector('form input');
const list = document.querySelector('ul')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = input2.value;
    list.appendChild(li);
    input2.value = '';
});