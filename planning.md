Learning Objectives
    //Steps to planning: 
        //wireframes, psueudocode, MVP
        //creating a timeline 
        //When planning an app, focused on purpose of app and the user. The purpose of this app was to create a functional tic-tac-toe game. User stories are a great way of uniting the user and the functionality with a benefit. 
            //ROLE--FUNCTIONALITY/TECHNOLGY--BENEFIT 
            //"As a user, I can click on a square of the gameboard and display my 'X' to visually see what squares are still available" 
            //As a user, I can decide to be  
    //Strategies for organization: 
        //function, class based code
            -writing code in functions allows to keep code clean, readable, and reuseable 
            -if you just want to perform an action, writing a function is all you need 
            -You would write a class if you want to group function and data together, like a logical unit. 
            -If you don't need to group the data and function together you could just write a function. 
            -Should I write this as a class so I can keep track of player scores?  Should the gameboard be a class to keep track of squares?? 
        //Model View Seperation 
            from "https://blog.sessionstack.com/how-javascript-works-writing-modular-and-reusable-code-with-mvc-16c65cbd9f64"
            basically, the idea is to seperate code to keep it clean and organized. Seperate how data is collected from users from how it is presented to users. MODEL returns data without formatting it, therefore it can be called for different purposes/instances 
        //Model: manages the data of application, it receives data from the controller and input from the user 
        //View: in charge of the user interface, received input from the user to send to M/C but also displays information from M/C back to the user. 
        //Controller: the middleman, the application logic. 
    
    //Discuss coding best practices in a larger app 
        -keep code concise, compartmentalized, and reuseable. 
        -A good file/folder structure 
        -Good naming conventions 
        -Modulariztion allows people to be working on multiple parts of application at once. The modules work independently and together, allows for reuseablility, and scalable! Great for when project starts getting bigger, are functions running at optimized level. Website can handle 10 users but can it handle 10 million?? 
    //Refactor and reorganize a working app 
        -imporves code readablity 
        -best done in small steps and before adding any new functionality! 
        -so at the end of getting a working project...go through and clean up repetative code, imporve variable names etc. DONT WRITE ANYTHING NEW FUNCTION WISE!
        

MVP: 
Bronze
    X a user can click on a box and an X or O will appear 
    X two users play against eachother dynamically 
    X a winner or draw can be determine and the game has a clear end 
    -Once an ending has been met, the user has the option to play again 
    -two users can keep track of their scores 
Silver 
    -the game is web responsive 
    -players enter their names to start game 
    -there is a dark/light theme 
    -the game has UI design principles incorporated 
    -a user can choose which team they want to be 
Gold 
    -The game has animations 
    -The user can play against a computer 

WireFrame: see screen shot! 
Pseudocode: 
//build a web application from scratch 
//need to keep track of two players, gameboard and pieces 
//need game logic to determine winner/end of game 
//make it dynamic so two players can compete 

    //two players instances
    //one board instance
    board opens like wireframe...once player one starts game begins. Player 1 clicks a square, X appears. Player 2 clicks a square O appears...Game ends after one person gets three in a row or a draw. Score is updated. Prompt to play again. 

  
    //each square has event listener, that captures square "id". Counter keeping track of player turn ++ and that id gets added to playerSquare "result string". Once a players count hits 3 it goes to an if check that checks if a form of that string exists in a dictionary of all possible winning combinations. If not, next player goes and the if check hits again...Goes until dictionary returns winning combo or counter reachs a limit and its a draw. 

    //game logic. can give each square a value. every player turn adds to player score. Once counter >=3, score is compared to 8 possible combination scores. Maybe all 8 winning scores are in an array or dictionary? So you see if winning numbers [key] == player score?? If true then player is winner game is over. If false...next player goes. 
    //Need a while loop...while gameOver = false, toggle from player1 turn to player2 turn. When player1 = true, add square to player 1 score and compare. if not a winning combo, player2 = true. indicated by HTML and then score added to player2 score. compare. continue going back and forth until winning score or counter = 9? 
    //can test the logic by putting player scores into an dictionary, after the algo runs (however possible combos there are) and make sure no repeating values??? 

    //need to hardcode HTML board. Use a grid?? Prepopulate with text but hidden. then after square is clicked the innertext is changed to X or O and made visible. 
    
   //when square is clicked, adds square value to player "score"...easier for board to keep track of counts or for player? The board has the dicitionary of winning scores...so once the counter hits 5, takes the player score and checks it. if not in dictionary, next players turn (or it is and winner determined) scond player chooses square adds to score checks to gameboard. winning team gets ++ to their score. 

