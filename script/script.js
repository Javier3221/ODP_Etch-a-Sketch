const container = document.querySelector(".container");

function drawSquares(dimensions = 16) {
    for (i = 0; i < (dimensions * dimensions); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.textContent = "h";
        container.appendChild(square);
    }
}

drawSquares();