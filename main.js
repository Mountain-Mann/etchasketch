const sizeOfGrid = 16;
const resetButton = document.querySelector('button')
const container = document.querySelector('.container')

const createGrid = (sizeOfGrid) => {
    for (i = 0; i < sizeOfGrid; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (k = 0; k < sizeOfGrid; k++){
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox)
        }

        container.appendChild(row);
    }
}
createGrid(sizeOfGrid);