let select = document.querySelector('#select');
for (i = 1; i < 101; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.innerText = i;
    select.appendChild(opt);
}
let gameover = true;
let h1 = document.querySelector('h1');
let x = 0, y = 0;
h1.innerText = `${x} to ${y}`

let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let reset = document.querySelector('#reset')
const disable = () => {
    p1.classList.toggle('btn-disabled');
    p2.classList.toggle('btn-disabled');
}

p1.addEventListener('click', () => {
    x++;
    h1.innerText = `${x} to ${y}`;
    gameRunning();
});
p2.addEventListener('click', () => {
    y++;
    h1.innerText = `${x} to ${y}`;
    gameRunning();
});
let selection = document.querySelector('#select');
let playingTo = 101;
selection.addEventListener('change', () => {
    playingTo = selection.selectedIndex;
    disable()
    gameRunning();
    selection.setAttribute('disabled', '')
    gameover = false;
})
let gameRunning = () => {
    if (playingTo === x) {
        h1.classList.toggle('text-accent');
        disable()
        selection.setAttribute('disabled', '');
    }
    else if (playingTo === y) {
        h1.classList.toggle('text-primary');
        disable()
        selection.setAttribute('disabled', '');
    }
    if (playingTo !== 0) {
        document.querySelector('#option').setAttribute('disabled', '')
    }
}

reset.addEventListener('click', () => {
    if (!gameover) {
        if (x !== playingTo || y !== playingTo) {
            disable()
        };
        gameRunning();
        x = 0; y = 0;
        h1.innerText = `${x} to ${y}`;
        selection.removeAttribute('disabled', '');
        document.querySelector('#option').removeAttribute('disabled', '')
        selection.selectedIndex = 0;
        gameover = true;
    }

});