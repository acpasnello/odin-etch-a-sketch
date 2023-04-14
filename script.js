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
        console.log(e)
        highlight(e)
    }));
}

function highlight(e) {
    let square = e.target
    square.style.backgroundColor = "red";
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