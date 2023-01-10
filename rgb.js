let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
h1.innerText = 'RGB';
btn.innerText = 'Click me';
h1.style.marginLeft = '45%';
btn.style.marginLeft = '45%';

let randomColor = () => {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`
    h1.innerText = `rgb(${x},${y},${z})`
    btn.innerText = 'Change Color!'
    h1.style.marginLeft = '40%';
    if (x + y + z < 300) {
        h1.style.color = 'white'
    }
    else {
        h1.style.color = 'black'
    }
}
btn.addEventListener('click', randomColor);