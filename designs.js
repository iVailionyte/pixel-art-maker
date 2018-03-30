// Select color input
// Select size input
const table = document.getElementById('pixelCanvas');
const form = document.querySelector('form');


// When size is submitted by the user, call makeGrid()

table.addEventListener('click', function (event) {
    event.preventDefault();
    const color = document.getElementById('colorPicker').value;
    if (event.target.style.backgroundColor == ('')) {
        event.target.style.backgroundColor = color;
    } else {
        event.target.style.backgroundColor = 'transparent';
    }
});


function makeGrid() {
    table.innerHTML = '';
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

form.addEventListener('submit', makeGrid);

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
});
