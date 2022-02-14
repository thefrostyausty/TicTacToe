// Web Page = House
// HTML = Structure (wood, bricks, etc.) DOM
// JavaScript = Electrical (opens garage door) = Programming Language (like Python, Java, C, C++)
// CSS = Paint


// HERE I WANT THE VARIABLES OF WHAT WILL BE EVOKED IN FUNCTIONS?


// I want to make a function that contains a condition that will display
// a message after a 'click' to say "Player One or Two it's your turn"
// now I will make a function to say when it is the players turn
const playerMessage = document.querySelector('#playerMessage');
let currentPlayer = 'X'


const displayCurrentPlayer = () => {
    playerMessage.innerText = `It's ${currentPlayer}'s turn`
}

displayCurrentPlayer()



// I want to show who won a match.
// this is the constant that holds the id HTML element
// here i utilized my vairable message which is connected to the ID end results to display when a winner has won
const winnerMessage = document.querySelector('#winnerMessage')

const displayWinner = (winner) => {
    playerMessage.innerText = `Player ${winner} won!`
}



// When a player clicks on a position on the Tic Tac Toe Board,
const symbols = ['X', 'O']
const boardPositions = document.querySelectorAll('.row div')

const takeTurn = (event) => {

    // 1. The current player's symbol should be filled in in that position IF that position isn't already taken.
    // the variable targetValue represents the element that was clicked on's value
    let positionDiv = event.target
    let positionValue = positionDiv.innerText
    let positionIsTaken = symbols.includes(positionValue)  // how to check if value is in an array
    if (!positionIsTaken) {
        positionDiv.innerText = currentPlayer

        // 2. A winner should be checked for AND declared if a winner exists
        // I have an array of strings with the winning combinations
        let winningCominations = [[0,1,2], [1,4,7], [2,5,8], [0,3,6], [2,4,6], [3,4,5], [6,7,8], [0,4,8]]
        

        // 3. If there's no winner, the next player's turn should start
        currentPlayer = currentPlayer === 'X' ? 'O': 'X'
        displayCurrentPlayer()
    }
}


for (let i = 0; i < boardPositions.length; i++ ) {
    // Assign the boardPosition at the current index to it's own value
    // i put boardPostion to equte to the index/divs
    let boardPosition = boardPositions[i]
    boardPosition.addEventListener('click', takeTurn)
}



// this should be able to clear my board and click when a player has a turn
const resetButton = document.querySelector('#reset')

const resetBoard = () => {
    for (let i = 0; i < boardPositions.length; i++ ) {
        let boardPosition = boardPositions[i]
        boardPosition.innerText = i
    }

    currentPlayer = 'X'
    displayCurrentPlayer()
}

resetButton.addEventListener('click', resetBoard)