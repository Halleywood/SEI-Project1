if(!sessionStorage.getItem("scoreX")){
    sessionStorage.setItem("scoreX", 0)
}
if(!sessionStorage.getItem("scoreO")){
    sessionStorage.setItem("scoreO", 0)
}
const gameBoard = document.querySelectorAll("#board > .square")
const messageContainer = document.querySelector(".gameboard-display")
const refreshBtn = document.createElement("button")
const restartBtn = document.createElement("button")
refreshBtn.classList.add("refresh-btn")
restartBtn.classList.add("restart-btn")
refreshBtn.innerText = "Play Again?"
restartBtn.innerText="Start a New Game!"

const Xplayer = document.querySelector("#x-player")
const Oplayer = document.querySelector("#o-player")

const xScore = document.querySelector("#x-score")
xScore.innerText = sessionStorage.getItem("scoreX")
const oScore = document.querySelector("#o-score")
oScore.innerText = sessionStorage.getItem("scoreO")

class Game {
    constructor(X, O){
        this.X = X
        this.O = O
        this.XScore = parseInt(sessionStorage.getItem("scoreX"))
        this.OScore = parseInt(sessionStorage.getItem("scoreO"))
        this.winningScoreCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8], 
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6], 
            [0,4,8]
        ]
        this.squaresAvailable = 9 
    }
    reloadGame(){
        sessionStorage.removeItem("name")
        sessionStorage.removeItem("side")
        sessionStorage.removeItem("scoreO")
        sessionStorage.removeItem("scoreX")
        location.reload()
    }
    restartGame(){
        stopConfetti()
        this.spacesAvailable = 9
        gameBoard.forEach((square)=>{
            square.innerText=''
            square.removeEventListener("click", this.playedSquare, {once : true})
            square.classList.remove('X-color')
            square.classList.remove('O-color')
        })  
    }
    endGame(input){
        Xplayer.removeAttribute('id', "active")
        Oplayer.removeAttribute('id', "active")
        let winner = document.createElement("div")
        if(input){
            startConfetti()
            if(sessionStorage.getItem("side") == input){
                let name = sessionStorage.getItem("name")
                winner.innerText = `${name} is the winner!`
            }
            else{
                winner.innerText = `${input} is the winner!`
            }
        }
        else{
            winner.innerText ="Looks like we have a good ol' fashioned draw!"
        }
        winner.classList.add("active-winner")   
        refreshBtn.addEventListener("click", this.restartGame)
        restartBtn.addEventListener("click", this.reloadGame)
        winner.appendChild(refreshBtn)
        winner.appendChild(restartBtn)
        messageContainer.appendChild(winner)
    }
    isTurn(){
       if(this.X){
        this.X = false 
        this.O = true 
        Oplayer.setAttribute('id', "active")
        Xplayer.removeAttribute('id', "active")
       }
       else{
        this.X = true 
        this.O = false 
       Xplayer.setAttribute('id', "active")
       Oplayer.removeAttribute('id', "active")
       }     
    }

    playedSquare =(event)=>{
        let square = event.target 
        this.squaresAvailable-- 
        if(this.X){
            square.innerText = "X"
            if(this.checkForWinner(square.innerText)){
                sessionStorage.setItem("scoreX", this.XScore + 1)
                xScore.innerText = sessionStorage.getItem("scoreX")
                return this.endGame(square.innerText)
            }
        }
        else{
            square.innerText = "O"
            square.classList.add("opposite")
            if(this.checkForWinner(square.innerText)){
               sessionStorage.setItem("scoreO", this.OScore + 1)
               oScore.innerText = sessionStorage.getItem("scoreO")
               console.log(square.innerText)
               return this.endGame(square.innerText)
            }
        }
        if(this.squaresAvailable < 1){
            return this.endGame(null)   
        }
        this.isTurn()
    }

    createBoard(input, sideChosen){
        if(sideChosen == 'X'){
            Xplayer.setAttribute('id', "active")  
            Oplayer.removeAttribute('id', "active")
            Xplayer.innerText = input
        }
        else{
            Xplayer.removeAttribute('id', "active") 
            Oplayer.setAttribute('id', "active")
            Oplayer.innerText = input
        }
        gameBoard.forEach(square=>{
            square.addEventListener("click", this.playedSquare, {once: true})
        })
    }
}
//*********************************************************************************SCRIPT LOGIC */
const userInput = document.querySelector("#opener-input")
const openerBtn = document.querySelectorAll(".opener-btn")
const opener = document.querySelector("#opener")

const getUserInput=(event)=>{
    let newUser = userInput.value
    let userSide = event.target.value
    sessionStorage.setItem("name", newUser)
    sessionStorage.setItem("side", userSide)
    if(userSide == 'X'){
        const newGame = new Game(true, false)
        newGame.createBoard(newUser, userSide)
        messageContainer.removeChild(opener)
           
    }
    else{
        const newGame = new Game(false, true)
        newGame.createBoard(newUser, userSide)
         messageContainer.removeChild(opener)
    }
}
const startGame =()=>{
    if(sessionStorage.getItem("name") == null){
        openerBtn.forEach((button)=>{
            button.addEventListener("click", getUserInput)
        })
    }
    else{ 
        let user = sessionStorage.getItem("name")
        let side = sessionStorage.getItem("side")
        if(side == 'X'){
            const sameGame = new Game ( true, false)
            sameGame.createBoard(user, side)
            messageContainer.removeChild(opener)
        }
        else{
            const sameGame = new Game ( false, true)
            sameGame.createBoard(user, side)
            messageContainer.removeChild(opener)
        }
       
    }
}
startGame();