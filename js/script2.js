//GAME OPENS WITH FORM FOR USER TO ENTER USERNAME AND CHOOSE A SIDE
//buttons have event listeners to call startGame function. 
const userInput = document.querySelector("#opener-input")
const startBtn = document.querySelectorAll(".opener-btn1, .opener-btn2")
const startGameWindow = document.querySelector("#start-game")
const messageContainer = document.querySelector(".gameboard-display")

const messageBox = document.querySelector(".restart-game")
const restartBtn = document.querySelector(".restart-button")

const startGame=(event)=>{
    let userName = userInput.value
    let userSide = event.target.value
    let userColor = "red"
    //checks for user input, checks which side was chosen and sets "other player" as opposite. 
    if(userName){
        if(userSide == 'X'){
           oppName = "Team O"
           oppSide = "O"
           oppColor = "green"
        }
        else{
            oppName = "Team X"
            oppSide = "X"
            oppColor = "green"
        }
        //instantiates two players, Game Object then takes in two Players as parameters
        const user = new Player(userName, userSide, userColor)
        const opponent = new Player(oppName, oppSide, oppColor)
        const newBoard = new Board(user, opponent)
     
        newBoard.createBoard()
        //takes down "start game" prompt
        messageContainer.removeChild(startGameWindow)
    }
    else{
        const incorrectInput = document.querySelector('#incorrect-input')
        incorrectInput.innerText = "Please enter a name!"
    }
}
//choosing an X or O will start the game --> Board.js
startBtn.forEach((button)=>{
    button.addEventListener("click", startGame)
})

