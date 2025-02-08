let boxes = document.querySelectorAll(".boxes")
let turn = "X"
let isGameOver = false

boxes.forEach((e) => {
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn
            checkWin()
            checkDraw()
            checkTurn()
        }
    })
})

const checkWin = () => {
    let winCondition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for (let i = 0; i < winCondition.length; i++) {
        let value0 = boxes[winCondition[i][0]].innerHTML;
        let value1 = boxes[winCondition[i][1]].innerHTML;
        let value2 = boxes[winCondition[i][2]].innerHTML;

        if (value1 != "" && value0 === value1 && value0 === value2) {
            isGameOver = true
            document.querySelector("#winner").innerHTML = `${turn} wins!`
            break
        }
    }
}

const checkDraw = () => {
    let isDraw = true
    boxes.forEach(e => {
        if (e.innerHTML === "") isDraw = false
    })
    if (isDraw && !isGameOver) {
        isGameOver = true
        document.querySelector("#winner").innerHTML = "it is draw play agin to win"
    }
}

const checkTurn = () => {
    if (!isGameOver) {
        if (turn === "X") {
            turn = "O"
        } else {
            turn = "X"
        }
    }
}

restartButton.addEventListener('click', resetGame);