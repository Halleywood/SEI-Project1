class Board {
    constructor(user, opponent) {
        //keeping track of Players
        this.user = user
        this.opponent = opponent
        this.displayName = document.querySelector(`#player-${user.side}`)
        this.opponentName = document.querySelector(`#player-${opponent.side}`)
        this.userScore = document.querySelector(`#score-${user.side}`)
        this.opponentScore = document.querySelector(`#score-${opponent.side}`)
        this.board = document.querySelectorAll('#board > .square')
        this.spacesAvailable = 9
        this.winningScoreCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ],
        this.userTurn = true
        this.restartBtn = document.querySelector('.restart-btn')
    }

    resetBoard() {
        stopConfetti()
        messageBox.style.visibility = "hidden"
        this.spacesAvailable = 9
        this.board.forEach((square) => {
            square.innerText = ''
            square.removeEventListener("click", this.playedSquare, { once: true })
            square.classList.remove('X-color')
            square.classList.remove('O-color')
        })

        this.createBoard()
    }

    itIsADraw() {
        messageBox.style.visibility = "visible"
        messageBox.innerText = "Looks like we have a good ol' fashioned draw!"
        this.restartBtn.addEventListener("click", this.resetBoard.bind(this))
        messageBox.appendChild(this.restartBtn)
    }

    itIsAWin(input) {
      
        messageBox.style.visibility = "visible"
        this.restartBtn.addEventListener("click", this.resetBoard.bind(this))
        messageContainer.style.opacity = "0.25"
        if (this.user.side == input) {
            startConfetti()
            this.user.score++
            messageBox.innerText = `Congratulations ${this.user.name} you beat ${this.opponent.name} in ${9 - this.spacesAvailable} moves!`
        }
        else {
            messageBox.innerText = `${this.opponent.name} is the winner! Better Luck next time!`
            this.opponent.score++
        }
        messageBox.appendChild(this.restartBtn)

    }
    //returns true if all of the innerText on board are equal at all of the winning combos. 
    checkForWinner(input) {
        return this.winningScoreCombinations.some(combo => {
            return combo.every((index) => {
                return this.board[index].innerText == input
            })
        })
    }
    //if it is the start of game, sets the initial to user active and opponent inactive. 
    //sets user turn to opposite, switches player turn indicator. 
    changeTurn() {
        if(this.spacesAvailable > 8){
            if(this.userTurn){
                this.displayName.classList.add('active')
                this.opponentName.classList.remove('active')
            }
            else{
                this.displayName.classList.remove('active')
                this.opponentName.classList.add('active')
            }
        }
        else{
            this.userTurn = !this.userTurn
            if(this.userTurn){
                this.displayName.classList.add('active')
                this.opponentName.classList.remove('active')
            }
            else{
                this.displayName.classList.remove('active')
                this.opponentName.classList.add('active')
            }
        }
    }
    //click event listener, takes the value from square, if its user turn will add user X or O...if not user's turn, will add opposite. 
    //subtracts a space, so it knows if there is a draw, then runs the "check for winner function"
    //if it returns false and spacesAvailable > 1, will change turns. 
    playedSquare(event) {
        event.stopImmediatePropagation()
        let square = event.target
        if (this.userTurn == true) {
            square.innerText = this.user.side
            square.classList.add(`${this.user.side}-color`)
        }
        else {
            square.innerText = this.opponent.side
            square.classList.add(`${this.opponent.side}-color`)
        }
        this.spacesAvailable--

        if (this.checkForWinner(square.innerText)) {
            return this.itIsAWin(square.innerText)
        }
        if (this.spacesAvailable < 1) {
            return this.itIsADraw(square.innerText)
        }
        this.changeTurn()
    }

    //calls this function in script.js, sets up board, display names, turn. First two lines are to remove reset window when starting another game 
    createBoard() {
        messageBox.style.visibility = "hidden"
        messageContainer.style.opacity = "1"
        this.changeTurn()
        this.board.forEach(square => {
            square.addEventListener("click", this.playedSquare.bind(this), { once: true })
        })
        this.displayName.innerText = this.user.name
        this.opponentName.innerText = this.opponent.name
        this.userScore.innerText = this.user.score
        this.opponentScore.innerText = this.opponent.score
    }


}