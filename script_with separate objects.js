var startButton = document.querySelector("#start");
var intro = document.querySelector("#intro");
var questionBlock = document.querySelector("#question-block");

/*
var item1 = {
  question: 'QUESTION 1: When asked, "How do you put a giraffe into a refrigerator?" how should you respond?',
  choice1: "Cry.",
  choice2: "Call your lifeline.",
  choice3: "Pseudocode the steps.",
  choice4: "Declare the task undefined.", 
  answer: "Pseudocode the steps.",
  correct: "Great job!",
  wrong: "Sorry, that's not right.  Better luck with the next one.",
}

var item2 = {
  question: "QUESTION 2: Now that we know that it can be done, what is step 1?",
  choice1: "Call the building superintendent.",
  choice2: "Open the refrigerator.",
  choice3: "Ask the giraffe if it wants to go in the refrigerator.",
  choice4: "Complete the if/else statement from the previous choice and go out for ice cream.", 
  answer: "Open the refrigerator.",
  correct: "Yes, the correct sequence is open the refrigerator, put in the giraffe, and close the door.  This question tests whether you tend to do simple things in an overly complicated way.",
  wrong: "Sorry, that's not right.  Better luck with the next one.",
}

var item3 = {
  question: "QUESTION 3: How do you put an elephant into a refrigerator?",
  choice1: "Search online for the best method.",
  choice2: "Measure the elephant.",
  choice3: "Measure the refrigerator.",
  choice4: "Open the refrigerator, put in the elephant and close the refrigerator.", 
  answer: "Search online for the best method.",
  correct: "Yes, if you search the internet for 'elephant' and 'refrigerator', you are likely to find the answer.  Open the refrigerator, take out the giraffe, put in the elephant and close the door. This tests your ability to think through the repercussions of your actions.",
  wrong: "Sorry, that's not right.  Better luck with the next one.",
}

var item4 = {
  question: "QUESTION 4: The Lion King is hosting an animal conference.  All the animals attend except one.  Which animal does not attend?",
  choice1: "gazelle",
  choice2: "wildebeest",
  choice3: "tiger",
  choice4: "elephant",
  answer:  "elephant",  
  correct: "Yes, The elephant is in the refrigerator. This tests your memory.",
  wrong: "Sorry, that's not right.  Better luck with the next one.",
}

var item5 = {
  question: "QUESTION 5: There is a river you must cross. But it is inhabited by crocodiles.  How do you manage it?",
  choice1: "Swim fast.",
  choice2: "Build a bridge.",
  choice3: "Wear stilts.",
  choice4: "Use a submarine.", 
  correct: "Yes, you swim across. All the crocodiles are attending the animal conference. This tests whether you learn quickly from your mistakes.",
  wrong: "Sorry, that's not right.  Maybe you can try the quiz one more time.",
}
*/

var questionArray = {

  "item1": {
  "question": 'When asked, "How do you put a giraffe into a refrigerator?" how should you respond?',
  "choice1": "Cry.",
  "choice2": "Call your lifeline.",
  "choice3": "Pseudocode the steps.",
  "choice4": "Declare the task undefined.", 
  "answer": "Pseudocode the steps.",
  "correct": "Great job!",
  "wrong": "Sorry, that's not right.  Better luck with the next one.",
},

  "item2": {
  "question": "Now that we know that it can be done, what is step 1?",
  "choice1": "Call the building superintendent.",
  "choice2": "Open the refrigerator.",
  "choice3": "Ask the giraffe if it wants to go in the refrigerator.",
  "choice4": "Complete the if/else statement from the previous choice and go out for ice cream.", 
  "answer": "Open the refrigerator.",
  "correct": "Yes, the correct sequence is open the refrigerator, put in the giraffe, and close the door.  This question tests whether you tend to do simple things in an overly complicated way.",
  "wrong": "Sorry, that's not right.  Better luck with the next one.",
},

  "item3": {
  "question": "How do you put an elephant into a refrigerator?",
  "choice1": "Search online for the best method.",
  "choice2": "Measure the elephant.",
  "choice3": "Measure the refrigerator.",
  "choice4": "Open the refrigerator, put in the elephant and close the refrigerator.", 
  "answer": "Search online for the best method.",
  "correct": "Yes, if you search the internet for 'elephant' and 'refrigerator', you are likely to find the answer.  Open the refrigerator, take out the giraffe, put in the elephant and close the door. This tests your ability to think through the repercussions of your actions.",
  "wrong": "Sorry, that's not right.  Better luck with the next one.",
},

  "item4": {
  "question": "The Lion King is hosting an animal conference.  All the animals attend except one.  Which animal does not attend?",
  "choice1": "gazelle",
  "choice2": "wildebeest",
  "choice3": "tiger",
  "choice4": "elephant",
  "answer":  "elephant",  
  "correct": "Yes, The elephant is in the refrigerator. This tests your memory.",
  "wrong": "Sorry, that's not right.  Better luck with the next one.",
},

  "item5": {
  "question": "There is a river you must cross. But it is inhabited by crocodiles.  How do you manage it?",
  "choice1": "Swim fast.",
  "choice2": "Build a bridge.",
  "choice3": "Wear stilts.",
  "choice4": "Use a submarine.", 
  "correct": "Yes, you swim across. All the crocodiles are attending the animal conference. This tests whether you learn quickly from your mistakes.",
  "wrong": "Sorry, that's not right.  Maybe you can try the quiz one more time.",
}
}


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
    
   //   for (var i = 0; i < questionArray.length; i++) { 
        question.textContent = questionArray["item1"]["question"]; 
        console.log("question.textContent");
        choice1.textContent = questionArray["item1"]["choice1"];
        choice2.textContent = questionArray["item1"]["choice2"];
        choice3.textContent = questionArray["item1"]["choice3"];
        choice4.textContent = questionArray["item1"]["choice4"];    

 /*       question.textContent = item1["question"]; 
        console.log("question.textContent");
        choice1.textContent = item1["choice1"];
        choice2.textContent = item1["choice2"];
        choice3.textContent = item1["choice3"];
        choice4.textContent = item1["choice4"];       */  
       
      }    
    //TIMER STARTS

    //When all questions answered OR time runs out, game is over.  Display score.

    //track high scores --- in local storage?
//}


startButton.addEventListener("click", startQuiz);

var questionArray = {

    "item1": {
    "question": 'When asked, "How do you put a giraffe into a refrigerator?" how should you respond?',
    "choice1": "Cry.",
    "choice2": "Call your lifeline.",
    "choice3": "Pseudocode the steps.",
    "choice4": "Declare the task undefined.", 
    "answer": "Pseudocode the steps.",
    "correct": "Great job!",
    "wrong": "Sorry, that's not right.  Better luck with the next one.",
},

    "item2": {
    "question": "Now that we know that it can be done, what is step 1?",
    "choice1": "Call the building superintendent.",
    "choice2": "Open the refrigerator.",
    "choice3": "Ask the giraffe if it wants to go in the refrigerator.",
    "choice4": "Complete the if/else statement from the previous choice and go out for ice cream.", 
    "answer": "Open the refrigerator.",
    "correct": "Yes, the correct sequence is open the refrigerator, put in the giraffe, and close the door.  This question tests whether you tend to do simple things in an overly complicated way.",
    "wrong": "Sorry, that's not right.  Better luck with the next one.",
},

    "item3": {
    "question": "How do you put an elephant into a refrigerator?",
    "choice1": "Search online for the best method.",
    "choice2": "Measure the elephant.",
    "choice3": "Measure the refrigerator.",
    "choice4": "Open the refrigerator, put in the elephant and close the refrigerator.", 
    "answer": "Search online for the best method.",
    "correct": "Yes, if you search the internet for 'elephant' and 'refrigerator', you are likely to find the answer.  Open the refrigerator, take out the giraffe, put in the elephant and close the door. This tests your ability to think through the repercussions of your actions.",
    "wrong": "Sorry, that's not right.  Better luck with the next one.",
},

    "item4": {
    "question": "The Lion King is hosting an animal conference.  All the animals attend except one.  Which animal does not attend?",
    "choice1": "gazelle",
    "choice2": "wildebeest",
    "choice3": "tiger",
    "choice4": "elephant",
    "answer":  "elephant",  
    "correct": "Yes, The elephant is in the refrigerator. This tests your memory.",
    "wrong": "Sorry, that's not right.  Better luck with the next one.",
},

    "item5": {
    "question": "There is a river you must cross. But it is inhabited by crocodiles.  How do you manage it?",
    "choice1": "Swim fast.",
    "choice2": "Build a bridge.",
    "choice3": "Wear stilts.",
    "choice4": "Use a submarine.", 
    "correct": "Yes, you swim across. All the crocodiles are attending the animal conference. This tests whether you learn quickly from your mistakes.",
    "wrong": "Sorry, that's not right.  Maybe you can try the quiz one more time.",
  }
}

console.log(questionArray[0][0]);