const grid = document.querySelector(".grid-holder");
const input = document.querySelector("#dimension");
const btn = document.querySelector("#btn");
const dimensionDisplay = document.querySelector("#numDimensions");
const clearBtn = document.querySelector("#clear");

btn.addEventListener("click", changeGrid);
clearBtn.addEventListener("click", clearGrid);

function gridMaker(dimensions) {
    for(let i = 0; i < dimensions; i++) { //4 squares make up the column
        const colSquare = document.createElement("div");
        colSquare.classList.add("colSquare");
        grid.appendChild(colSquare);

        for(let j = 0; j < dimensions; j++) { //add 4 squares to each column
            const rowSquare = document.createElement("div");
            rowSquare.classList.add("rowSquare");
            rowSquare.addEventListener("mouseover", colorChange);
            colSquare.appendChild(rowSquare);
        } 
    }
    console.log("Added grid of " + dimensions + " dimensions.");
}

function colorChange(e) {
        e.target.classList.add("colored");
        console.log("colored");
}

function removeGrid(){ //helper function for changeGrid. Deletes all Squares
    while(grid.firstChild) {
        grid.removeChild(grid.lastElementChild);
    }
}

function changeGrid() {
    if(input.value == "") {
        return;
    }else if(input.value > 100 || input.value < 1) {
        alert("Value must be within range of 1 to 100.");
        return;
    }else if(isNaN(input.value)) {
        alert("Invalid input");
        return;
    }
    let dimensions = input.value;
    input.value = '';
    removeGrid();
    gridMaker(dimensions);
    dimensionDisplay.textContent = dimensions + " x " + dimensions;
    input.focus();
}

function clearGrid() {
    let coloredSquares = document.querySelectorAll(".colored");
    console.log(coloredSquares);
    for(let i = 0; i < coloredSquares.length; i++){
        coloredSquares[i].classList.remove("colored");
    }
}

gridMaker(4); //default is grid of 4 x 4