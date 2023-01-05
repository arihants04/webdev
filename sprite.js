//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
document.querySelector('body').style.backgroundColor = 'antiquewhite'
for (let i = 1; i <= 155; i++) {
    wholeElement = document.createElement('div')
    newText = document.createElement('b');
    newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    newText.innerText = i;
    wholeElement.appendChild(newImg);
    wholeElement.appendChild(newText);
    container.appendChild(wholeElement)
}
