# Tic-Tac-Toe Front-End Application 
![screenshot of web application game board](../../../Desktop/SEIProject1PICS/screenshot.jpg "Visual of the game played on a browser")

* ❌ Users can customize their names and choose their playing icon 
* ⭕ Play unlimited games without having to refresh the browser 
* ❌ Incorporates Confetti.js library for colorful, fully animated visual effects
* ⭕ Mobile Responsive so users can play on any device
* ❌ Dynamically changes static HTML file using CSS and JavaScript for an interactive user experience  
* ⭕ Keep track of your score while playing and haave the option to save score without requiring sign in or database 





![refactoringCode](https://user-images.githubusercontent.com/87944545/229692926-7da3bde3-92ec-4967-b227-1322944ab2a9.png)
![refactoringCode2](https://user-images.githubusercontent.com/87944545/229692945-8cd2480c-e52b-4429-be33-16a8b90a36da.jpg)

![timeline](https://user-images.githubusercontent.com/87944545/229692971-2dbb3691-4560-4661-a7ef-177d569be59e.jpg)

##Table of Contents:

####Learning Objectives 
######1. Steps for Planning a Project
        Pseudocode
        Writing code is complicated. Writing complex algorithms and nested if statements is even more complicated. Writing pseudocode helps developers work through             important logic in a language that is easy to read and understand. It can also help see the moving pieces and how they connect. You might have some unforseen           variables that you hadn't thought about before you started, and adding them back in after you've written complicated logic can lead to complications, code              breaking, plus wasted time and frustration. 
        I found it helpful to really write out the logic behind the game so I knew what variables I needed to keep track of from the very beginning.
        Wire Frame
        Again, a great way of designing your website without the complicated language of CSS. You can visually see how you want things to fit together before writing           any code, and because of that you can set yourself up better. For example, I knew I wanted this website to be mobile responsive, so I planned out my grid and           was able to have a fully mobile response skeleton of a website to build off of. 
        User Stories
        When planning an application, it is important to be focused on its purpose and the user benefiting from it. User stories are a great way of uniting the user            with the application functionality and the a benefit. 
        MVP
        Minimum Viable Product. By laying out your minimum requirements, you can prioritize the code and functionality you need to get the application running. It is a         great way to test your application on initial users to get feedback. Again, applications should be developed with the user benefit from the planning stage, so          why would they not be part of the testing stage? By getting feedback in the early stages it can prevent you from wasting time and energy on features the user           doesn't benefit from. 
   
      
######2. Strategies for Organization 
        Functional versus Class Based Code 
            -Writing functional code (code blocks organized into functions) keeps code clean, readable, and reuseable. When thinking about the purpose of this                  application, while I did want to have readable, reuseable code, I also needed to keep track of data and information related to those actions. So for this              project, with the exception of my start script file, I structured my JavaScript code in classes, to keep the data and function in logical units. Ultimatelly           I created a Player class and a Board class that accepted two Players. As of now I am only keeping track of a few variables such as name and score, but                   because I have written this code as a class I can add new data attributes as the game develops. Which promotes organization and scalability. 

        Model View Seperation 
          -The basic premise is to seperate how data is collected from users from how it is presented to users. It would not be as fun of a game if the user had to             click on the box and physically type their chosen character. But because we know their chosen character from the input we collected in the beginning, we can           dynamically render it on the square of their choosing with a click of a button. 

#####The Process 
          Pseudocode --> Application  
          * Utilized pen and paper, a dry erase board, and wireframe to write down logical steps to go from start to finish. I prioritized the JavaScript logic because            for me that was going to be the hardest, and because the logic is the backbone to the game. None of the Bronze MVP tasks could be completed without the game            logic. 
          *I got the logic working, then built a skeleton of a website to make a clickeable prototype. Once I had all of the game logic down I could add more complex              features. 
        * WireFrame  --> 
      
        Skeleton --> 
        ![wireframe](https://user-images.githubusercontent.com/87944545/229692302-6307d3da-ec00-43a9-8c10-49650e50f35b.jpg)
        
        ![mobileresponsive](https://user-images.githubusercontent.com/87944545/229692871-7d68c9d5-2374-4cde-895f-43f92b49f19f.jpg)
        ![screenshot](https://user-images.githubusercontent.com/87944545/229692960-c6c55bff-187a-4ec4-adc8-cf08bcd763c0.jpg)
        Full Website--> 
        [My Deployed Application](https://halleywood.github.io/SEI-Project1/)
        
        ##MVP 
        🥉 Bronze MVP 
            *a user can click on a box and an X or O will appear 
            *two users play against eachother dynamically 
            *a winner or draw can be determine and the game has a clear end 
            *Once an ending has been met, the user has the option to play again 
            *two users can keep track of their scores 
         🥈 Silver MVP 
            *The game is web responsive 
            *Players enter their names to start game 
            *A user can choose which team they want to be 
            *The game has animations 
         🥇 Gold MVP
            *there is a dark/light theme 
            *have a website accessible to visually impared, for a user to be able to tabulate over gameboard

######1. What I plan to do in the future/ How I would change it 
######2. Instructions on how to download and play on your own machine
######3. Sources 
