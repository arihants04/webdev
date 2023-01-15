let bc = document.body
setTimeout(() => {
    bc.style.backgroundColor = 'red';
    setTimeout(() => {
        bc.style.backgroundColor = 'yellow';
        setTimeout(() => {
            bc.style.backgroundColor = 'green';
            setTimeout(() => {
                bc.style.backgroundColor = 'blue';
                setTimeout(() => {
                    bc.style.backgroundColor = 'purple';
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

const colorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        bc.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

colorChange('olive', 6000, () => {
    colorChange('magenta', 1000, () => {
        colorChange('teal', 1000, () => {
            colorChange('cyan', 1000)
        })
    })
})