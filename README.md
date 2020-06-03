# 04 Web APIs: Code Quiz

For the HTML, I started with something very basic.
- Jumbotron from Bootstrap
- Within the div that came with Jumbotron, I put the introductory page pieces.  Besides the explanatory text, I also had the start button.  
- Then I marked an empty div for a question block.
- I marked a second empty div for a score block and included an empty unordered list.

The rest of the elements were handled in asset files.
- I put in some basic CSS.  I differentiated in color between the start button, the choice buttons, and the timer span.

- The Javascript file is where everything else occurred.  
- First, I called the HTML elements from the existing HTML file with query selector.
    * start button
    * intro
    * question block
    * score block
    * list block (where scores are listed)

- Then I created a series of arrays.
    * questions
    * choices for question 1
    * choices for question 2
    * choices for question 3
    * choices for question 4
    * choices for question 5
    * an array of choice arrays
    * answer key array
    * array of responses if answered correctly
    * array of responses if answered incorrectly

- Then I created some other needed variables
    * tracker for correct response count
    * empty score array where new scores can be loaded

- Next I added an event listener to the start button, which activated the startQuiz function.
    * First, I hid the intro page (except the heading).
    * Then I called the startTimer function.
    * Then I created elements for the question, the choices (with a class called 'choices'), and the response.
    * Then I made a for loop to run through the questions, pulling content from the arrays.
    * I added an event listener to the 'choices' button class, but it did not seem to recognize the selection.  (I needed this to delay moving to the next question, as the for loop wanted to speed through them almost immediately to the end.  I also wanted to have it listen to the answers and determine if the answer was correct or not.)
    * I intended to compare the answer's dataset to the answer key, but it is unclear if this was working (as the event listener step was before this).
    * Incorrect answers were supposed to dock 5 seconds from the allotted time.  
    * Correct answers were counted (for calculating the score later).
    * It was supposed to loop through each question.  But because there was a problem with the event listener, it was not working.  

    Attached are some screenshots from that phase. 
    ![intro page](/screenshots/intro.jpg)
    ![question1 rendered](/screenshots/question1)
    ![time's up but still with 2 seconds](/screenshots/timeup)
    ![timer would not go below 1 second](/screenshots/stucktimer)

    I did get some help on this, but perhaps too late in the process.  The professor helped to simplify a few steps.  He took it out of the for loop (to avoid having the need to delay between questions).  He also used jQuery a little more than I had.  On the looping, he tried to solve this by have the startButton event listener calling from j = 0 and incrementing j++ after each round, re-calling the function to start again.  The problem that arose (which is why I have not included it here) is that the start button was not initiating.  
