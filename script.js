document.addEventListener('DOMContentLoaded', generateGrid())

function generateGrid(size = 16) {
    let grid = document.querySelector('.grid')
    grid.innerHTML = "";
    for (let i = 0;i < size;i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        grid.appendChild(row)
        for (let j = 0;j < size;j++) {
            let square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
        }
    }

    let squares = document.querySelectorAll(".square")
    squares.forEach(square => square.addEventListener('mouseover', function(e) {
        // console.log(e)
        highlight(e)
    }));
}

function highlight(e) {
    let square = e.target
    changeSquareColor(square)
    return true;
}

function changeSquareColor(square) {
    if (square.style.backgroundColor) {
        let rgb = square.style.backgroundColor;
        rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',')
        let red = parseInt(rgb[0]) * 0.9;
        console.log(red)
        let green = parseInt(rgb[1]) * 0.9;
        let blue = parseInt(rgb[2]) * 0.9;
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    } else {
        let red = Math.random() * 255;
        let green = Math.random() * 255;
        let blue = Math.random() * 255;
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    }
    return true;
}

function userGrid() {
    let size = parseInt(prompt("Enter a number of squares per side:"));
    while (size > 100) {
        size = parseInt(prompt("Maximum size is 100. Please choose again."));
    }
    generateGrid(size)

}



let button = document.querySelector('button')
button.addEventListener('click', userGrid)