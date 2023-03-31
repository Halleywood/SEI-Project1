//*******************************************************************************PLAYER CLASS */
if(!sessionStorage.getItem("scoreX")){
    sessionStorage.setItem("scoreX", 0)
}
if(!sessionStorage.getItem("scoreO")){
    sessionStorage.setItem("scoreO", 0)
}

const gameBoard = document.querySelectorAll("#board > .square")
const messageContainer = document.querySelector(".gameboard-display")
const refreshBtn = document.createElement("button")
refreshBtn.classList.add("refresh-btn")
refreshBtn.innerText = "Play Again?"


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
    restartGame(){
        stopConfetti()
        location.reload()
    }
    endGame(input){
        Xplayer.removeAttribute('id', "active")
        Oplayer.removeAttribute('id', "active")
        let winner = document.createElement("div")
        if(input){
            startConfetti()
            winner.innerText = `${input} is the winner!`
        }
        else{
            winner.innerText ="Looks like we have a good ol' fashioned draw!"
        }
        winner.classList.add("active-winner")   
        refreshBtn.addEventListener("click", this.restartGame)
        winner.appendChild(refreshBtn)
        messageContainer.appendChild(winner)
     
        console.log(messageContainer)
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


    createBoard(){
     
        Xplayer.setAttribute('id', "active")
        Oplayer.removeAttribute('id', "active")
        gameBoard.forEach(square=>{
            square.addEventListener("click", this.playedSquare, {once: true})
        })
    }
    
    checkForWinner(input){
        return this.winningScoreCombinations.some(combo =>{
            return combo.every((index)=>{
                return gameBoard[index].innerHTML == input
            })
        })
    }
}

//*********************************************************************************SCRIPT LOGIC */

const newGame = new Game(true, false)
newGame.createBoard()

//console.log(playerX)
//console.log(playerO)