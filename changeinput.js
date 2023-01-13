let input = document.querySelector('input');

input.addEventListener('change', (e) => {
    console.log('change');
});

const h2 = document.querySelector('h2');

input.addEventListener('input', (e) => {
    h2.innerText = input.value;
});

let button = document.querySelector('button');

const randColor = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return `rgb(${x},${y},${z})`
}
button.style.marginLeft = '3em'
button.style.marginTop = '1em'
document.querySelector('div').style.width = ('27.5%')
document.querySelector('div').style.paddingBottom = ('1em')
button.addEventListener('click', () => document.querySelector('div').style.backgroundColor = randColor());
