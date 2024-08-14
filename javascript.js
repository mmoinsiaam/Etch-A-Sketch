const grid = document.querySelector(".grid-holder");

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

gridMaker(4);