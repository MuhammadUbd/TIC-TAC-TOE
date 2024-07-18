let x_Class = "X"
let o_Class = "O"
let swapingTurns;
let currentTurn;
let gameEnded = false
const boxes = document.querySelectorAll(".box")
const gameState = document.getElementById("state")
const reStart = document.getElementById("btn")

const verticalCheck = () => {
    const box0 = boxes[0].classList.contains(currentTurn)
    const box1 = boxes[1].classList.contains(currentTurn)
    const box2 = boxes[2].classList.contains(currentTurn)
    const box3 = boxes[3].classList.contains(currentTurn)
    const box4 = boxes[4].classList.contains(currentTurn)
    const box5 = boxes[5].classList.contains(currentTurn)
    const box6 = boxes[6].classList.contains(currentTurn)
    const box7 = boxes[7].classList.contains(currentTurn)
    const box8 = boxes[8].classList.contains(currentTurn)
    if (box0 && box1 && box2) {
        gameEnded = true
    } else if (box3 && box4 && box5) {
        gameEnded = true
    } else if (box6 && box7 && box8) {
        gameEnded = true
    }
    if (gameEnded === true) {
        gameState.innerText = `${currentTurn} won!`
        reStart.classList.add("vis")
    }
}

const horizontalCheck = () => {
    const box0 = boxes[0].classList.contains(currentTurn)
    const box1 = boxes[1].classList.contains(currentTurn)
    const box2 = boxes[2].classList.contains(currentTurn)
    const box3 = boxes[3].classList.contains(currentTurn)
    const box4 = boxes[4].classList.contains(currentTurn)
    const box5 = boxes[5].classList.contains(currentTurn)
    const box6 = boxes[6].classList.contains(currentTurn)
    const box7 = boxes[7].classList.contains(currentTurn)
    const box8 = boxes[8].classList.contains(currentTurn)
    if (box0 && box3 && box6) {
        gameEnded = true
    } else if (box1 && box4 && box7) {
        gameEnded = true
    } else if (box2 && box5 && box8) {
        gameEnded = true
    }
    if (gameEnded === true) {
        gameState.innerText = `${currentTurn} won!`
        reStart.classList.add("vis")
    }
}

const diagonalCheck = () => {
    const box0 = boxes[0].classList.contains(currentTurn)
    const box2 = boxes[2].classList.contains(currentTurn)
    const box4 = boxes[4].classList.contains(currentTurn)
    const box6 = boxes[6].classList.contains(currentTurn)
    const box8 = boxes[8].classList.contains(currentTurn)
    if (box0 && box4 && box8) {
        gameEnded = true
    } else if (box2 && box4 && box6) {
        gameEnded = true
    }
    if (gameEnded === true) {
        gameState.innerText = `${currentTurn} won!`
        reStart.classList.add("vis")
    }
}

const checkStates = () => {
    return diagonalCheck() || horizontalCheck() || verticalCheck()
}

const draw = () => {
    for (let i = 0; i < boxes.length; i++) {
        if (!boxes[i].classList.contains(x_Class) && !boxes[i].classList.contains(o_Class)) {
            return false
        }
    }
    return true
}

const showActions = () => {
    boxes.forEach(box => {
        swapingTurns = true
        box.classList.remove(o_Class)
        box.classList.remove(x_Class)
        gameState.innerText = ""
        reStart.classList.remove("vis")
        gameEnded = false
        box.addEventListener("click", () => {
            if (!gameEnded) {
                if (swapingTurns === false) {
                    box.classList.add(o_Class)
                    swapingTurns = true
                    currentTurn = o_Class
                } else {
                    box.classList.add(x_Class)
                    swapingTurns = false
                    currentTurn = x_Class
                }
                if (checkStates() || gameEnded === true) {
                    return;
                } else if (draw()) {
                    gameState.innerText = `Draw!`
                    reStart.classList.add("vis")
                    gameEnded = true
                }
            }
        }, { once: true })
    })
}

reStart.addEventListener("click", () => showActions())
showActions()
