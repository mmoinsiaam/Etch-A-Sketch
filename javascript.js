const grid = document.querySelector(".grid-holder");
const selection = document.querySelector(".selection");
const input = document.querySelector("#dimension");
const btn = document.querySelector("#btn");
const dimensionDisplay = document.querySelector("#numDimensions");
const clearBtn = document.querySelector("#clear");
const numColors = 7;
const colorArray = ["black","red","yellow","orange","blue","purple","green"]; 

btn.addEventListener("click", changeGrid);
clearBtn.addEventListener("click", clearGrid);

let isDragging = false;

function setColorSelection(){
    //add 7 colors in total. create div
    for(let i = 0; i < numColors; i++) { //4 squares make up the column
        const colorBox = document.createElement("div");
        colorBox.classList.add("colorBox");
        colorBox.style.backgroundColor = colorArray[i];
        selection.appendChild(colorBox);
    }
}

function gridMaker(dimensions) {
    for(let i = 0; i < dimensions; i++) { //4 squares make up the column
        const colSquare = document.createElement("div");
        colSquare.classList.add("colSquare");
        grid.appendChild(colSquare);

        for(let j = 0; j < dimensions; j++) { //add 4 squares to each column
            const rowSquare = document.createElement("div");
            rowSquare.classList.add("rowSquare");
            rowSquare.addEventListener("click", colorChange)
            rowSquare.addEventListener("mousedown", md)
            rowSquare.addEventListener("mouseup", mu)
            rowSquare.addEventListener("mousemove", mm)
            colSquare.appendChild(rowSquare);
        } 
    }
    console.log("Added grid of " + dimensions + " dimensions.");
}

function md(e) {
    isDragging = true;
}

function mu(e) {
    isDragging = false;
}

function mm(e){
    if(isDragging){
        colorChange(e);
    }
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

setColorSelection();
gridMaker(4); //default is grid of 4 x 4