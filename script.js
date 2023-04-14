document.addEventListener('DOMContentLoaded', generateGrid())

function generateGrid() {
    let container = document.querySelector('.grid')
    for (let i = 0;i < 16;i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        for (let j = 0;j < 16;j++) {
            let square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
        }
    }
}

function highlight(e) {
    let square = e.target
    square.style.backgroundColor = "red";
    return true;
}

let squares = document.querySelectorAll(".square")
squares.forEach(square => square.addEventListener('mouseover', function(e) {
    console.log(e)
    highlight(e)
}));