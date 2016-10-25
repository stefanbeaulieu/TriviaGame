$( document ).ready(function() {

  $('#buttonArea').html('<button class="btn" id="btn" type="button" name="button">Start</button>');

  $('#buttonArea').on("click", function begin() {
    pageLoad();
  });

});

var question1 =
  {
    question: "Where is Yellowstone National Park?",
    // option1: "<input type="radio" name="question1a">",
    option2: "North Dakota",
    option3: "Utah",
    option4: "Oklahoma",
    correct: "Correct! Yellowstone National Park is in Wyoming.",
    wrong: "Im sorry, Yellowstone is in Wyoming",
    out: 0,
  };

var question2 =
  {
    question: "How mant first magnitude springs does Florida have?",
    option1: "57",
    option2: "137",
    option3: "212",
    option4: "33",
    correct: "Correct! There are 33 first magnitude springs in Florida.",
    wrong: "Im sorry, there are 33 first magnitude springs in Florida.",
  };

var question3 =
  {
    question: "What are Lions afraid of?",
    option1: "Being overtaken by their pack",
    option2: "The Lioness (like all men)",
    option3: "Their evil brother with the black mane",
    option4: "That weird monkey with the stick",
    correct: "Correct! Lions are deathly afraid of the Lioness",
    wrong: "Im sorry, only the Lioness strikes fear into the King",
  };

var question4 =
  {
    question: "Where is Yellowstone National Park?",
    option1: "Wyoming",
    option2: "North Dakota",
    option3: "Utah",
    option4: "Oklahoma",
    correct: "Correct! Yellowstone National Park is in Wyoming.",
    wrong: "Im sorry, Yellowstone is in Wyoming",
  };

var question5 =
  {
    question: "How mant first magnitude springs does Florida have?",
    option1: "57",
    option2: "137",
    option3: "212",
    option4: "33",
    correct: "Correct! There are 33 first magnitude springs in Florida.",
    wrong: "Im sorry, there are 33 first magnitude springs in Florida.",
  };

var question6 =
  {
    question: "How mant first magnitude springs does Florida have?",
    option1: "57",
    option2: "137",
    option3: "212",
    option4: "33",
    correct: "Correct! There are 33 first magnitude springs in Florida.",
    wrong: "Im sorry, there are 33 first magnitude springs in Florida.",
  };

var questionCount = 0;

var correct = 0;

var wrong = 0;

var count = 3;

var counter;

function subtractor()
  {
    counter = setInterval(countDown, 1000);
  }

function countDown()
  {

    count--;

    if (count === 0)
      {
        clearInterval(counter);
        count = 30;
        if (question1.out === 0) {
          question1.out++;
        } else if (question2.out === 0){
          question2.out++;
        }
      }

      if (question1.out === 1) {
        secondQuestion();
      } else {

      }

      document.getElementById("timer").innerHTML= "Time Remaining:  " + count + " seconds";
  }

function pageLoad() {

  /***********
  Question 1
  ***********/
  $('#question1Area').html("Where is Yellowstone National Park?");
  $('#q1').html('<form><input type="radio" name="question1" id="wyoming"> Wyoming <input type="radio" name="question1" id="northdakota">  North Dakota <input type="radio" name="question1" id="nevada"> Nevada <input type="radio" name="question1" id="oklahoma"> Oklahoma</form><br>');

  /***********
  Question 2
  ***********/
  $('#question2Area').html("How mant first magnitude springs does Florida have?");
  $('#q2').html('<form><input type="radio" name="question2" id="onetwentyfive"> 125 <input type="radio" name="question2" id="twofortyseven">  247 <input type="radio" name="question2" id="sixtythree"> 63 <input type="radio" name="question2" id="thirtythree"> 33</form><br>');

  /***********
  Question 3
  ***********/
  $('#question3Area').html("What is a lion afraid of?");
  $('#q3').html('<form><input type="radio" name="question3" id="pack"> Their Pack <input type="radio" name="question3" id="lioness"> The Lioness <input type="radio" name="question3" id="brother"> Their Evil Brother <input type="radio" name="question3" id="monkey"> That Weird Monkey</form><br>');

  /***********
  Question 4
  ***********/
  $('#question4Area').html("Where is Autralia?");
  $('#q4').html('<form><input type="radio" name="question4" id="downunder"> Down Under <input type="radio" name="question4" id="australia">  Australia? <input type="radio" name="question4" id="outback"> The Outback <input type="radio" name="question4" id="florida"> Florida</form><br>');

  /***********
  Question 5
  ***********/
  $('#question5Area').html("How large is the Grand Canyon?");
  $('#q5').html('<form><input type="radio" name="question5" id="grandwrong1"> 1211 mi(2) <input type="radio" name="question5" id="grandwrong2">  2,700 mi(2) <input type="radio" name="question5" id="grandcorrect"> 1,902 mi(2) <input type="radio" name="question5" id="grandwrong3"> 1,650 mi(2)</form><br>');

  /***********
  Question 6
  ***********/
  $('#question6Area').html("When lost, what star do you look for?");
  $('#q6').html('<form><input type="radio" name="question6" id="bigdipper"> 125 <input type="radio" name="littledipper">  247 <input type="radio" name="question6"> 63 <input type="radio" name="question6"> 33</form><br>');

  /***********
  Question 7
  ***********/
  $('#question7Area').html("Where is Yellowstone National Park?");
  $('#q7').html('<form><input type="radio" name="question7" id=""> Wyoming <input type="radio" name="question7">  North Dakota <input type="radio" name="question7"> Nevada <input type="radio" name="question7"> Oklahoma</form><br>');

  /***********
  Question 8
  ***********/
  $('#question8Area').html("Where is Yellowstone National Park?");
  $('#q8').html('<form><input type="radio" name="question8" id=""> Wyoming <input type="radio" name="question8">  North Dakota <input type="radio" name="question8"> Nevada <input type="radio" name="question8"> Oklahoma</form><br>');

  $('#buttonArea').html("");
  console.log("question 1 set");

  $('#submitArea').html('<button class="btn" id="btn" type="button" name="button">Submit</button>');

  $('#submitArea').on("click", function submitButton() {

    // Question 1
    if (wyoming.checked) {
      correct++;
      console.log("correct: " + correct);
    } else if (northdakota.checked || nevada.checked || oklahoma.checked) {
      wrong++;
      console.log("wrong: " + wrong);
    }

    // Question 2
    if (thirtythree.checked) {
      correct++;
      console.log("correct: " + correct);
    } else if (onetwentyfive.checked || twofortyseven.checked || sixtythree.checked) {
      wrong++;
      console.log("wrong: " + wrong);
    }

    // Question 3
    if (lioness.checked) {
      correct++;
      console.log("correct: " + correct);
    } else if (pack.checked || brother.checked || monkey.checked) {
      wrong++;
      console.log("wrong: " + wrong);
    }

    // Question 4
    if (downunder.checked) {
      correct++;
      console.log("correct: " + correct);
    } else if (australia.checked || outback.checked || florida.checked) {
      wrong++;
      console.log("wrong: " + wrong);
    }

    // Question 5
    if (grandcorrect.checked) {
      correct++;
      console.log("correct: " + correct);
    } else if (grandwrong1.checked || grandwrong2.checked || grandwrong3.checked) {
      wrong++;
      console.log("wrong: " + wrong);
    }

  });

}


// /*********************
// Question 1
// *********************/
//
// function firstQuestion()
//   {
//
//
//     option1.onclick = function correctAnswer() {
//       clearInterval(counter);
//       $('#questionArea').html("");
//       $('#option1').html("");
//       $('#option2').html("");
//       $('#option3').html("");
//       $('#option4').html("");
//       $('#result').html(question1.correct + "<p></p>");
//       $('#correctAnswer').html('<img src="assets/images/yellowstone_correct.jpg" />');
//       $('#timer').html("");
//       setTimeout(function correctDelay() {
//         secondQuestion();
//         console.log(count);
//       }, 3000);
//     }; // end option 1 on click
//
//     option2.onclick = function wrongAnswer() {
//       alert('WRONG 2');
//     }; // end option 2 onclick
//
//     option3.onclick = function wrongAnswer() {
//       alert('wrong 3');
//     }; // end option 3 onclick
//
//     option4.onclick = function wrongAnswer() {
//       alert('wrong 4');
//     }; // end option 4 onclick
//
//     if (count === 1) {
//       alert('msg');
//
//     }
//
//   } // end first questions
//
//
//
//   /*********************
//   Question 2
//   *********************/
//
//   function secondQuestion()
//     {
//       subtractor();
//       countDown();
//       $('#questionArea').html(question2.question);
//       $('#option1').html(question2.option1);
//       $('#option2').html(question2.option2);
//       $('#option3').html(question2.option3);
//       $('#option4').html(question2.option4);
//       $('#result').html("");
//       $('#correctAnswer').html("");
//       console.log("question 2 set");
//
//       option1.onclick = function correctAnswer() {
//         clearInterval(counter);
//         $('#questionArea').html("");
//         $('#option1').html("");
//         $('#option2').html("");
//         $('#option3').html("");
//         $('#option4').html("");
//         $('#result').html(question1.correct + "<p></p>");
//         $('#correctAnswer').html('<img src="assets/images/yellowstone_correct.jpg" />');
//         setTimeout(function correctDelay() {
//
//         }, 3000);
//       }; // end option 1 on click
//
//       option2.onclick = function wrongAnswer() {
//         alert('WRONG 2');
//       }; // end option 2 onclick
//
//       option3.onclick = function wrongAnswer() {
//         alert('wrong 3');
//       }; // end option 3 onclick
//
//       option4.onclick = function wrongAnswer() {
//         alert('wrong 4');
//       }; // end option 4 onclick
//   }
//
//   /**********************
//   Time Outs
//   **********************/
