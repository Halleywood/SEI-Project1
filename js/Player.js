class Player{
    constructor(type){
        this.type = type
        this.score = document.querySelector(`#${this.type}-score`).innerText
    }

    incrementWinCount(){
        this.score++
    }
}

const playerX = new Player("x")
const playerO = new Player("o")