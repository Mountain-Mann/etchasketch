const sizeOfGrid = 16;
const resetButton = document.querySelector('button');
const container = document.querySelector('.container');
const promptBtn = document.getElementById('#promptBtn');


const createGrid = (sizeOfGrid) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (i = 0; i < sizeOfGrid; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (k = 0; k < sizeOfGrid; k++){
            const widthAndHeight = 960 / sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            });

            row.appendChild(gridBox);
        };

        wrapper.appendChild(row);
    };
    container.appendChild(wrapper);
};

promptBtn.addEventListener('click', promptMe())

//createGrid(sizeOfGrid);

function promptMe(){
    let numGrid = prompt('How big would you like your grid? Please enter one number less than 101.');
    if (numGrid >= 101){
        alert('Please type a number less than 101!');
    } else if (numGrid <= 0){
        alert('Please enter a number higher than 0!')
    }
    const wrapper = document.querySelector('.wrapper');
    
    if (!wrapper){
        createGrid(parseInt(numGrid));
    } else {
        wrapper.remove();
        createGrid(parseInt(numGrid));
    }
}


