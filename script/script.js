const container = document.querySelector(".container");

//draws an amount of squares depending on the dimensions specified. Default is 16x16
function drawSquares(dimensions = 16) {
    for (i = 0; i < (dimensions * dimensions); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    container.style.cssText += `grid-template-columns: repeat(${dimensions}, 1fr); 
    grid-auto-rows: minmax(20px, auto)`;

    const squares = document.querySelectorAll(".square");

    for (let square of squares) {
        square.addEventListener("mouseover", () => {
            square.classList.add("Active");
        });
    }
}

function generateRGB() {
    let randomValue = Math.floor(Math.random()*255)/255
    return randomValue;
}

drawSquares();

const button = document.querySelector("button");


button.addEventListener("click", () => {
    let dimensions = prompt("How big you want your canvas to be?");
    if (dimensions > 64) {
        alert("The canvas can't be bigger than 64x64");
    }
    else {

        const squares = document.querySelectorAll(".square");

        for (let square of squares) {
            square.remove();
        }

        drawSquares(dimensions)
    }
});


