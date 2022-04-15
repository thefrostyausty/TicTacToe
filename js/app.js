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
const winnerMessage = document.querySelector('#winnerMessage')
const playerMessage = document.querySelector('#playerMessage');

let currentPlayer = 'X'

const displayCurrentPlayer = () => {
    playerMessage.innerText = `It's ${currentPlayer}'s turn`
}
displayCurrentPlayer()

const tieGame = () => {
    winnerMessage.innerText = "IT'S A TIE. RESET BOARD!"
}

// I want to show who won a match.
// this is the constant that holds the id HTML element
// here i utilized my vairable message which is connected to the ID end results to display when a winner has won
const displayWinner = () => {
    winnerMessage.innerText = `Player ${currentPlayer} won!`
}
// When a player clicks on a position on the Tic Tac Toe Board,
const symbols = ['X', 'O']
const boardPositions = document.querySelectorAll('.row div')

const checkWinner = () => {
    if (box0.innerHTML === box1.innerHTML && box1.innerHTML === box2.innerHTML ||
        box2.innerHTML === box1.innerHTML && box1.innerHTML === box0.innerHTML){
        if (box0.innerHTML === "X" || box0.innerHTML === "O"){
            displayWinner()}
    }
    if (box1.innerText === box4.innerText && box4.innerText === box7.innerText ||
        box7.innerText === box4.innerText && box4.innerText === box1.innerText){
        if (box1.innerHTML === "X" || box1.innerHTML === "O"){
            displayWinner()}
    }
    if (box2.innerText === box5.innerText && box5.innerText === box8.innerText ||
        box8.innerText === box5.innerText && box5.innerText === box2.innerText){
        if (box2.innerHTML === "X" || box2.innerHTML === "O"){
            displayWinner()}
    }
    if (box0.innerText === box3.innerText && box3.innerText === box6.innerText ||
        box6.innerText === box3.innerText && box3.innerText === box0.innerText ){
        if (box0.innerHTML === "X" || box0.innerHTML === "O"){
            displayWinner()}
    }
    if (box3.innerText === box4.innerText && box4.innerText === box5.innerText ||
        box5.innerText === box4.innerText && box4.innerText === box3.innerText){
        if (box3.innerHTML === "X" || box3.innerHTML === "O"){
            displayWinner()}
    }
    if (box2.innerText === box4.innerText && box4.innerText === box6.innerText ||
        box6.innerText === box4.innerText && box4.innerText === box2.innerText) {
        if (box2.innerHTML === "X" || box2.innerHTML === "O"){
            displayWinner()}
    }
    if (box6.innerText === box7.innerText && box7.innerText === box8.innerText ||
        box8.innerText === box7.innerText && box7.innerText === box6.innerText){
        if (box6.innerHTML === "X" || box6.innerHTML === "O"){
            displayWinner()}
    }
    if (box0.innerText === box4.innerText && box4.innerText === box8.innerText ||
        box8.innerText === box4.innerText && box4.innerText === box0.innerText){
        if (box0.innerHTML === "X" || box0.innerHTML === "O"){
            displayWinner()}
    }
    if (box0.innerText !== "" && box1.innerText !== "" && box2.innerText !== "" &&
        box3.innerText !== "" && box4.innerText !== "" && box5.innerText !== "" &&
        box6.innerText !== "" && box7.innerText !== "" && box8.innerText !== ""){
            tieGame()
        }
}
// checkWinner()
const takeTurn = (event) => {

    // 1. The current player's symbol should be filled in in that position IF that position isn't already taken.
    // the variable targetValue represents the element that was clicked on's value
    
    let positionDiv = event.target
    console.log('this is the position div', positionDiv)
    let positionValue = positionDiv.innerText
    console.log('this is the position value', positionValue)
    let positionIsTaken = symbols.includes(positionValue) // Googled: how to check if value is in an array and received assistance from friend/tutor
    console.log('this is the position positionTaken', positionIsTaken)
    let gameOver = false;
    if (!positionIsTaken && !gameOver) {
        positionDiv.innerText = currentPlayer
        checkWinner()
        // console.log("what is this",positionDiv.id)
        // 2. A winner should be checked for AND declared if a winner exists
        // I have an array with the winning combinations
        // let winningCombinations = [[0, 1, 2], [1, 4, 7], [2, 5, 8], [0, 3, 6], [2, 4, 6], [3, 4, 5], [6, 7, 8], [0, 4, 8]]
        // if (currentPlayer == 'X') {
            // } 
        // if (box0.innerText == box1.innerText){
            //     console.log('this is hit')
            // }
            
        } else if (positionIsTaken && !gameOver){
            positionValue = currentPlayer
            tieGame()
        }
        
        // console.log(box8.innerText)
        // 3. If there's no winner, the next player's turn should start
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        displayCurrentPlayer()
    }
    


for (let i = 0; i < boardPositions.length; i++) {
    // Assign the boardPosition at the current index to it's own value
    // i put boardPostion to equte to the index/divs
    let boardPosition = boardPositions[i]
    boardPosition.addEventListener('click', takeTurn)
}



// this should be able to clear my board and click when a player has a turn
const resetButton = document.querySelector('#reset')

const resetBoard = () => {
    for (let i = 0; i < boardPositions.length; i++) {
        let boardPosition = boardPositions[i]
        boardPosition.innerText = ""
    }
    winnerMessage.innerText = ""
    currentPlayer = 'X'
    displayCurrentPlayer()
    takeTurn()
}

resetButton.addEventListener('click', resetBoard)