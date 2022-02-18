// Web Page = House
// HTML = Structure (wood, bricks, etc.) DOM
// JavaScript = Electrical (opens garage door) = Programming Language (like Python, Java, C, C++)
// CSS = Paint


// HERE I WANT THE VARIABLES OF WHAT WILL BE EVOKED IN FUNCTIONS?
const box0 = document.getElementById('0')
const box1 = document.getElementById('1')
const box2 = document.getElementById('2')
const box3 = document.getElementById('3')
const box4 = document.getElementById('4')
const box5 = document.getElementById('5')
const box6 = document.getElementById('6')
const box7 = document.getElementById('7')
const box8 = document.getElementById('8')

// I want to make a function that contains a condition that will display
// a message after a 'click' to say "Player One or Two it's your turn"
// now I will make a function to say when it is the players turn
const playerMessage = document.querySelector('#playerMessage');
let currentPlayer = 'X'
let xMoves = []
let oMoves = []

const displayCurrentPlayer = () => {
    playerMessage.innerText = `It's ${currentPlayer}'s turn`
}

displayCurrentPlayer()



// I want to show who won a match.
// this is the constant that holds the id HTML element
// here i utilized my vairable message which is connected to the ID end results to display when a winner has won
const winnerMessage = document.querySelector('#winnerMessage')

const displayWinner = (winner) => {
    winnerMessage.innerText = `Player ${winner} won!`
}



// When a player clicks on a position on the Tic Tac Toe Board,
const symbols = ['X', 'O']
const boardPositions = document.querySelectorAll('.row div')

const takeTurn = (event) => {

    // 1. The current player's symbol should be filled in in that position IF that position isn't already taken.
    // the variable targetValue represents the element that was clicked on's value
    
    let positionDiv = event.target
    let positionValue = positionDiv.innerText
    let positionIsTaken = symbols.includes(positionValue)  // Googled: how to check if value is in an array and received assistance from friend/tutor
    let gameOver = false;
    
    if (!positionIsTaken && !gameOver) {
        positionDiv.innerText = currentPlayer
        console.log(positionDiv.id)
        // 2. A winner should be checked for AND declared if a winner exists
        // I have an array with the winning combinations
        // let winningCombinations = [[0, 1, 2], [1, 4, 7], [2, 5, 8], [0, 3, 6], [2, 4, 6], [3, 4, 5], [6, 7, 8], [0, 4, 8]]
        // if (currentPlayer == 'X') {
        // } 

        if (box0.innerText == box1.innerText && box1.innerText == box2.innerText||
            box1.innerText == box4.innerText && box1.innerText == box7.innerText||
            box2.innerText == box5.innerText && box2.innerText == box8.innerText||
            box0.innerText == box3.innerText && box0.innerText == box6.innerText||
            box2.innerText == box4.innerText && box2.innerText == box6.innerText||
            box3.innerText == box4.innerText && box3.innerText == box5.innerText||
            box6.innerText == box7.innerText && box6.innerText == box8.innerText||
            box0.innerText == box4.innerText && box0.innerText == box2.innerText
            ){
                displayWinner(currentPlayer)
                 gameOver = true;
                 console.log(gameOver)
        }           
        
        // console.log(box8.innerText)



        // 3. If there's no winner, the next player's turn should start
        currentPlayer = currentPlayer === 'X' ? 'O': 'X'
        displayCurrentPlayer()
    } else{
        console.log(gameOver)
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