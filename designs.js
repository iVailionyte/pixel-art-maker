// select form and table tags
const table = document.getElementById('pixelCanvas');
const form = document.querySelector('form');


// When size is submitted by the user, call makeGrid()

function makeGrid() {
    table.innerHTML = '';
    // Select size input
    const inputHeight = document.getElementById('inputHeight').value;
    const inputWeight = document.getElementById('inputWeight').value;

    for (let i = 0; i < inputHeight; i++) {
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        for (let x = 0; x < inputWeight; x++) {
            const tableCell = document.createElement('td');
            tableRow.appendChild(tableCell);
        }
    }
};

// call makeGrid()

form.addEventListener('submit', makeGrid);

// pick color

table.addEventListener('click', function (event) {
    event.preventDefault();
    // Select color input
    const color = document.getElementById('colorPicker').value;

    if (event.target.style.backgroundColor == ('')) {
        event.target.style.backgroundColor = color;
    } else {
        event.target.style.backgroundColor = 'transparent';
    }
});

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
});
