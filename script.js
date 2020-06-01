var startButton = document.querySelector("#start");
var intro = document.querySelector("#intro");
var questionBlock = document.querySelector("#question-block");

var questionArray = ['When asked, "How do you put a giraffe into a refrigerator?" how should you respond?',
                     "Now that we know that it can be done, what is step 1?",
                     "How do you put an elephant into a refrigerator?",
                     "The Lion King is hosting an animal conference.  All the animals attend except one.  Which animal does not attend?",
                     "There is a river you must cross. But it is inhabited by crocodiles.  How do you manage it?"]

var item1Choices = ["Cry.","Call your lifeline.","Pseudocode the steps.","Declare the task undefined."]

var item2Choices = ["Call the building superintendent.",
                  "Open the refrigerator.",
                  "Ask the giraffe if it wants to go in the refrigerator.",
                  "Complete the if/else statement from the previous choice and go out for ice cream."] 

var item3Choices = ["Search online for the best method.",
                  "Measure the elephant.",
                  "Measure the refrigerator.",
                  "Open the refrigerator, put in the elephant and close the refrigerator."]

var item4Choices = ["gazelle","wildebeest","tiger","elephant"]

var item5Choices = ["Swim fast.","Build a bridge.","Wear stilts.","Use a submarine."]

var choiceArray = [item1Choices,item2Choices,item3Choices,item4Choices,item5Choices]

var answer = ["Pseudocode the steps.","Open the refrigerator.","Search online for the best method.","elephant","Swim fast."]

var responseCorrect = ["Great job!",
                       "Yes, the correct sequence is open the refrigerator, put in the giraffe, and close the door.  This question tests whether you tend to do simple things in an overly complicated way.",
                       "Yes, if you search the internet for 'elephant' and 'refrigerator', you are likely to find the answer.  Open the refrigerator, take out the giraffe, put in the elephant and close the door. This tests your ability to think through the repercussions of your actions.",
                       "Yes, The elephant is in the refrigerator. This tests your memory.",
                       "Yes, you swim across. All the crocodiles are attending the animal conference. This tests whether you learn quickly from your mistakes."]

var responseWrong = ["Sorry, that's not right.  Better luck with the next one.",
                     "Sorry, that's not right.  Better luck with the next one.",
                     "Sorry, that's not right.  Better luck with the next one.",
                     "Sorry, that's not right.  Better luck with the next one.",
                     "Sorry, that's not right.  Maybe you can try the quiz one more time."]

var totalSeconds = 0;

function startQuiz() {
    $(intro).hide();
    var question = document.createElement("p"); 
    var choice1 = document.createElement("button");
    var choice2 = document.createElement("button");
    var choice3 = document.createElement("button");
    var choice4 = document.createElement("button"); 
    question.textContent = "";
    choice1.textContent = "";
    choice2.textContent = "";
    choice3.textContent = "";
    choice4.textContent = ""; 
    questionBlock.appendChild(question);
    questionBlock.appendChild(choice1);
    questionBlock.appendChild(choice2);
    questionBlock.appendChild(choice3);
    questionBlock.appendChild(choice4);
    
   for (var i = 0; i < questionArray.length; i++) { 
        question.textContent = questionArray[i]; 
        choice1.textContent = choiceArray[i][0];
        choice2.textContent = choiceArray[i][1];
        choice3.textContent = choiceArray[i][2];
        choice4.textContent = choiceArray[i][3];    
   }   
        
    //TIMER STARTS
    var timerDisplay = document.createElement("span"); 
    timerDisplay.textContent = "Hello World";  
    questionBlock.appendChild(timerDisplay);

    for (var i = 0; i < totalSeconds.length; i++) {
      setInterval(function() {
        totalSeconds = "60";
        totalSeconds--;
        console.log(totalSeconds);
        timerDisplay.textContent = totalSeconds + " seconds left";
        return totalSeconds;

      }, 1000);
   // return totalSeconds;
    }

    //When all questions answered OR time runs out, game is over.  Display score.

    //track high scores --- in local storage?
}


startButton.addEventListener("click", startQuiz);