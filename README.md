# Tic-Tac-Toe Front-End Application 
![screenshot](https://user-images.githubusercontent.com/87944545/229692960-c6c55bff-187a-4ec4-adc8-cf08bcd763c0.jpg)

* ❌ Users can customize their names and choose their playing icon 
* ⭕ Play unlimited games without having to refresh the browser 
* ❌ Incorporates Confetti.js library for colorful, fully animated visual effects
* ⭕ Mobile Responsive so users can play on any device
* ❌ Dynamically changes static HTML file using CSS and JavaScript for an interactive user experience  
* ⭕ Keep track of your score while playing and haave the option to save score without requiring sign in or database 

## Table of Contents:
#### Learning Objectives 
1. **Steps for Planning a Project**
    1. Pseudocode
        Writing code is complicated. Writing complex algorithms and nested if statements is even more complicated. Writing pseudocode helps developers work through important logic in a language that is easy to read and understand. It can also help see the moving pieces and how they connect. You might have some unforseen variables that you hadn't thought about before you started, and adding them back in after you've written complicated logic can lead to complications, code breaking, plus wasted time and frustration. 
        I found it helpful to really write out the logic behind the game so I knew what variables I needed to keep track of from the very beginning.
    2. Wire Frame
        Again, a great way of designing your website without the complicated language of CSS. You can visually see how you want things to fit together before writing any code, and because of that you can set yourself up better. For example, I knew I wanted this website to be mobile responsive, so I planned out my grid and was able to have a fully mobile response skeleton of a website to build off of. 
    3. User Stories
        When planning an application, it is important to be focused on its purpose and the user benefiting from it. User stories are a great way of uniting the user with the application functionality and the a benefit. 
    4. MVP
        Minimum Viable Product. By laying out your minimum requirements, you can prioritize the code and functionality you need to get the application running. It is a great way to test your application on initial users to get feedback. Again, applications should be developed with the user benefit from the planning stage, so why would they not be part of the testing stage? By getting feedback in the early stages it can prevent you from wasting time and energy on features the user doesn't benefit from. 
---
![timeline](https://user-images.githubusercontent.com/87944545/229692971-2dbb3691-4560-4661-a7ef-177d569be59e.jpg)
2. **Strategies for Organization**
* **Functional versus Class Based Code**
            -Writing functional code (code blocks organized into functions) keeps code clean, readable, and reuseable. When thinking about the purpose of this application, while I did want to have readable, reuseable code, I also needed to keep track of data and information related to those actions. So for this project, with the exception of my start script file, I structured my JavaScript code in classes, to keep the data and function in logical units. Ultimatelly I created a Player class and a Board class that accepted two Players. As of now I am only keeping track of a few variables such as name and score, but because I have written this code as a class I can add new data attributes as the game develops. Which promotes organization and scalability. 
* **Model View Seperation**
            -The basic premise is to seperate how data is collected from users from how it is presented to users. It would not be as fun of a game if the user had to click on the box and physically type their chosen character. But because we know their chosen character from the input we collected in the beginning, we can dynamically render it on the square of their choosing with a click of a button. 

### 3. **The Process** 
**Pseudocode ----> Application**
**WireFrame  -----> Skeleton ------> Full Website**
    ![WIREFRAME1 BRONZE](https://user-images.githubusercontent.com/87944545/229829413-08df0118-dfbf-46cc-b416-1e6bf679ea75.jpg)
    ![wireframe](https://user-images.githubusercontent.com/87944545/229692302-6307d3da-ec00-43a9-8c10-49650e50f35b.jpg)
    ![mobileresponsive](https://user-images.githubusercontent.com/87944545/229692871-7d68c9d5-2374-4cde-895f-43f92b49f19f.jpg)

#### * 🥉 **Bronze MVP** 
    1. a user can click on a box and an X or O will appear 
    2. two users play against eachother dynamically 
    3. a winner or draw can be determine and the game has a clear end 
    4. Once an ending has been met, the user has the option to play again 
    5. two users can keep track of their scores 
#### * 🥈 **Silver MVP**
    1. The game is web responsive 
    2. Players enter their names to start game 
    3. A user can choose which team they want to be 
    4. The game has animations 
#### * 🥇 **Gold MVP**
    1. there is a dark/light theme 
    2. have a website accessible to visually impared, for a user to be able to tabulate over gameboard


![screenshot](https://user-images.githubusercontent.com/87944545/229692960-c6c55bff-187a-4ec4-adc8-cf08bcd763c0.jpg)
[My Deployed Application](https://halleywood.github.io/SEI-Project1/)
1. What I plan to do in the future/ How I would change it 
    -Code Refactoring 
    -Having 100% working logic before any CSS. 
2. Instructions on how to download and play on your own machine
    - Interested in getting this application on your own machine? 
    -Github has a great tutorial, with images, that shows you exactly how to do that! 
    [GitHub Tutorial](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
    -Just fork this repository into your own GitHub account, clone the code, and run your index file from the code editor of your choice! 
3. Sources 
MVC image: https://blog.sessionstack.com/how-javascript-works-writing-modular-and-reusable-code-with-mvc-16c65cbd9f64
     

            
    
        