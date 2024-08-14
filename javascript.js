const grid = document.querySelector(".grid-holder");
const input = document.querySelector("#dimension");
const btn = document.querySelector("#btn");

btn.addEventListener("click", changeGrid);

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
    let dimensions = input.value;
    input.value = '';
    removeGrid();
    gridMaker(dimensions);
    input.focus();
}

gridMaker(4);