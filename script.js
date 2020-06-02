//connecting to HMTL elements
var startButton = document.querySelector("#start");
var intro = document.querySelector("#intro");
var questionBlock = document.querySelector("#question-block");
var scoreBlock = document.querySelector("#scoreBlock");
var listBlock = document.querySelector("#listBlock");

//Setting questions in an array
var questionArray = ['QUESTION 1: When asked, "How do you put a giraffe into a refrigerator?" how should you respond?',
                     "QUESTION 2: Now that we know that it can be done, what is step 1?",
                     "QUESTION 3: How do you put an elephant into a refrigerator?",
                     "QUESTION 4: The Lion King is hosting an animal conference.  All the animals attend except one.  Which animal does not attend?",
                     "QUESTION 5: There is a river you must cross. But it is inhabited by crocodiles.  How do you manage it?"]

//setting choices in array variables (each group applies to one question)                    
var item1Choices = ["Cry.", "Call your lifeline.", "Pseudocode the steps.", "Declare the task undefined."]

var item2Choices = ["Call the building superintendent.",
                    "Open the refrigerator.",
                    "Ask the giraffe if it wants to go in the refrigerator.",
                    "Complete the if/else statement from the previous choice and go out for ice cream."]

var item3Choices = ["Search online for the best method.",
                    "Measure the elephant.",
                    "Measure the refrigerator.",
                    "Open the refrigerator, put in the elephant and close the refrigerator."]

var item4Choices = ["gazelle", "wildebeest", "tiger", "elephant"]

var item5Choices = ["Swim fast.", "Build a bridge.", "Wear stilts.", "Use a submarine."]

var choiceArray = [item1Choices, item2Choices, item3Choices, item4Choices, item5Choices]

//answers in an array
var answer = ["2", "1", "0", "3", "0"]

//responses in arrays
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

    //                 var question = document.createElement("p");
    //                 var choice1 = document.createElement("button", onclick = "javascript: setButtonPressed();");
    //                 var choice2 = document.createElement("button", onclick = "javascript: setButtonPressed();");
    //                 var choice3 = document.createElement("button", onclick = "javascript: setButtonPressed();");
    //                 var choice4 = document.createElement("button", onclick = "javascript: setButtonPressed();");
    //                 question.textContent = "";
    //                 choice1.textContent = "";
    //                 choice2.textContent = "";
    //                 choice3.textContent = "";
    //                 choice4.textContent = "";
    //                 choice1.className.add="choices";
    //                 choice2.className.add="choices";
    //                 choice3.className.add="choices";
    //                 choice4.className.add="choices";

var correct = 0;
var scoreArray = [];

//function that activates when start button is clicked (see bottom for event listener)
function startQuiz() {
  $(intro).hide();
  startTimer();

  var question = document.createElement("p");
  var choice1 = document.createElement("button", onclick = "javascript: setButtonPressed();");
  var choice2 = document.createElement("button", onclick = "javascript: setButtonPressed();");
  var choice3 = document.createElement("button", onclick = "javascript: setButtonPressed();");
  var choice4 = document.createElement("button", onclick = "javascript: setButtonPressed();");
  question.textContent = "";
  choice1.textContent = "";
  choice2.textContent = "";
  choice3.textContent = "";
  choice4.textContent = "";
  //choice1.className.add="choices";
  //choice2.className.add="choices";
  //choice3.className.add="choices";
  //choice4.className.add="choices";
  choice1.classList.add="choices";
  choice2.classList.add="choices";
  choice3.classList.add="choices";
  choice4.classList.add="choices";
  choice1.dataset.indexNumber = "0";
  choice2.dataset.indexNumber = "1";
  choice3.dataset.indexNumber = "2";
  choice4.dataset.indexNumber = "3";
  questionBlock.appendChild(question);
  questionBlock.appendChild(choice1);
  questionBlock.appendChild(choice2);
  questionBlock.appendChild(choice3);
  questionBlock.appendChild(choice4);

  var response = document.createElement("h4");
  response.textContent = "";
  questionBlock.appendChild(response);

  for (var j = 0; j < questionArray.length; j++) {
    question.textContent = questionArray[j];
    choice1.textContent = choiceArray[j][0];
    choice2.textContent = choiceArray[j][1];
    choice3.textContent = choiceArray[j][2];
    choice4.textContent = choiceArray[j][3];
    if (secondsElapsed < 60) {

      //function to wait until buttons are pushed to continue
      var buttonpressed = false;

      choices.addEventListener("click", function waitForIt() {
        if (!buttonpressed) {
          setTimeout(waitForIt, 500);
        } else {
          function setButtonPressed(event) {
            buttonpressed = true;
          
            choices.addEventListener("click", function checkAnswer(event) {
            //function checkAnswer(event) {
              let userchoice = event.target.getAttribute("dataset.indexNumber");
              if(userchoice[j] === answer[j]) {
                response.textContent = responseCorrect[0];
                correct++;
              }
              else {
              response.textContent = responseWrong[0];
              secondsElapsed = secondsElapsed + 5;
              }
            }
          )}
        };
      }
      )} else {
    var secondsLeft = totalSeconds - secondsElapsed;
    var score = correct * 15 + secondsLeft;
    return score; 
    scoreArray.push("score");
    }
  }
}

startButton.addEventListener("click", startQuiz);
//choices.addEventListener("click", checkAnswer);

var totalSeconds = 0;
var secondsElapsed = 0;
//var secondsLeft = (totalSeconds - secondsElapsed);
var interval;

function startTimer() {

  var timerDisplay = document.createElement("span");
  timerDisplay.textContent;
  questionBlock.appendChild(timerDisplay);

  totalSeconds = 60;
  secondsElapsed = 0;
//  secondsLeft = (totalSeconds - secondsElapsed);
//  var secondsLeft = (totalSeconds - secondsElapsed);
//  console.log("secondsLeft" + secondsLeft);


  clearInterval(interval);

  if (totalSeconds > 0) {    
      interval = setInterval(function() {
        var secondsLeft = (totalSeconds - secondsElapsed);
//        console.log("secondsLeft" + secondsLeft);
        parseInt(secondsElapsed);
        secondsElapsed++;
        timerDisplay.textContent = parseInt(secondsLeft) + " seconds left";

        checkTimeout();
      }, 1000);
  }
} 

// This function stops the interval and also resets secondsElapsed 
function stopTimer() {
  secondsElapsed = 0;
  clearInterval(interval);
  //renderTime();   ----- NEVER USED
}

var finalscoreDisplay;

function checkTimeout() {
 // checks to see if the time has run out
 
 // if (secondsLeft == 0) {   ----- DOESN'T WORK
  if (secondsElapsed >= totalSeconds) { 
    console.log("secondsElapsed " + secondsElapsed);
    console.log("totalSeconds " + totalSeconds);
  stopTimer();
  alert("Times Up");
  scoreArray.sort(function(a,b){b - a;} - 0.5);
  finalscoreDisplay = document.createElement("li");
  finalscoreDisplay.textContent = "";
  scoreBlock.appendChild(finalscoreDisplay);

  for (var k = 0; k < scoreArray.length; k++) {
    finalscoreDisplay.textContent = scoreArray[k];
  }

    questionBlock.style.display = "none";
    scoreBlock.style.display = "block";
  //}
}
} 