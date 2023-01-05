const allImages = document.getElementsByTagName('img');
for (img of allImages) {
    img.src = 'https://justaseniorandherblog.com/wp-content/uploads/2016/03/Needles500pxRt.png'

}
const square = document.getElementsByClassName('square');

a = document.querySelectorAll('a')

for (l of a) {
    l.textContent = 'porcupine'
    l.style.color = 'rgb(0,108,134'
    l.style.textDecorationColor = 'magenta'
    l.style.textDecorationStyle = 'dotted'

}
let h1 = document.querySelector('h1')
let img1 = document.querySelector('img:nth-of-type(1)')
document.querySelector('h1').style.margin = '30px 40px'
