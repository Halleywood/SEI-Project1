class Player{
    constructor(name, side, color = "yellow"){
        this.name = name
        this.side = side 
        this.score = 0
        this.color = color
    }

    incrementWinCount(){
        this.score++
    }
}



/*
div opens, gets name and side...makes new instance of player. 
new Game instance opens same time. 
//new game createBoard() 
click on a square...innerText = this.player.side. 
//check for winner. 
//if winner //increase player score count, 

*/
