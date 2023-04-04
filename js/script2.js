//GAME OPENS WITH FORM FOR USER TO ENTER USERNAME AND CHOOSE A SIDE
//buttons have event listeners to call startGame function. 
const userInput = document.querySelector("#opener-input")
const startBtn = document.querySelectorAll(".opener-btn")
const startGameWindow = document.querySelector("#start-game")
const messageContainer = document.querySelector(".gameboard-display")

const messageBox = document.querySelector(".restart-game")
const restartBtn = document.querySelector(".restart-button")

//a second confetti.js animation I have not gotten to work yet. Commenting out for later. 
// const end = Date.now() + 6 * 1000;
// const colors = ["#bb0000", "#ffffff", "#ff6600" ,"#ff00ff", "#ff3300", "#00ff66", "#00ffff", "#3112cd", "#00ffff", "#3112cd"];
// function frame() {
//     confetti({
//         particleCount: 20,
//         angle: 120,
//         spread: 55,
//         origin: { x: 1},
//         colors: colors,
//     });
//     if (Date.now() < end) {
//         requestAnimationFrame(frame);
//     }
//     confetti({
//         particleCount: 20,
//         angle: 120,
//         spread: 55,
//         origin: { x: 0},
//         colors: colors,
//     });
//     if (Date.now() < end) {
//         requestAnimationFrame(frame);
//     }
// }

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

