const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const columns = 5;
let score = 0;
let speed = 1.5;
let position = -100;
let gameOver = false;

function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");

    const blackIndex = Math.floor(Math.random() * columns);

    for (let i = 0; i < columns; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        if (i === blackIndex) {
            tile.classList.add("black");
        }

        tile.addEventListener("click", () => {
            if (tile.classList.contains("black")) {
                tile.classList.remove("black");
                score++;
                scoreDisplay.textContent = score;
            } else {
                endGame();
            }
        });

        row.appendChild(tile);
    }

    game.insertBefore(row, game.firstChild);
}


function update() {
    if (gameOver) return;

    position += speed;
    game.style.top = position + "px";

    
    if (position >= 0) {
        const lastRow = game.lastChild;
        const blackTile = lastRow.querySelector(".black");

        if (blackTile) {
            endGame();
            return;
        }

        game.removeChild(lastRow);
        createRow();
        position = -100;
    }

    requestAnimationFrame(update);
}

function endGame() {
    gameOver = true;
    alert("Game Over! Score: " + score);
    location.reload();
}


for (let i = 0; i < 5; i++) {
    createRow();
}

update();
