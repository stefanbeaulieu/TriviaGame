$( document ).ready(function() {

  $('#timer').html("");

  $('#questionArea').html('<button class="btn" id="btn" type="button" name="button">Start</button>');

  $('#questionArea').on("click", function begin() {
    firstQuestion();
  });

});

var question1 =
  {
    question: "Where is Yellowstone National Park?",
    option1: "Wyoming",
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

/*********************
Question 1
*********************/

function firstQuestion()
  {
    subtractor();
    countDown();
    $('#questionArea').html(question1.question);
    $('#option1').html(question1.option1);
    $('#option2').html(question1.option2);
    $('#option3').html(question1.option3);
    $('#option4').html(question1.option4);
    console.log("question 1 set");

    option1.onclick = function correctAnswer() {
      clearInterval(counter);
      $('#questionArea').html("");
      $('#option1').html("");
      $('#option2').html("");
      $('#option3').html("");
      $('#option4').html("");
      $('#result').html(question1.correct + "<p></p>");
      $('#correctAnswer').html('<img src="assets/images/yellowstone_correct.jpg" />');
      $('#timer').html("");
      setTimeout(function correctDelay() {
        secondQuestion();
        console.log(count);
      }, 3000);
    }; // end option 1 on click

    option2.onclick = function wrongAnswer() {
      alert('WRONG 2');
    }; // end option 2 onclick

    option3.onclick = function wrongAnswer() {
      alert('wrong 3');
    }; // end option 3 onclick

    option4.onclick = function wrongAnswer() {
      alert('wrong 4');
    }; // end option 4 onclick

    if (count === 1) {
      alert('msg');
    }

  } // end first questions



  /*********************
  Question 2
  *********************/

  function secondQuestion()
    {
      subtractor();
      countDown();
      $('#questionArea').html(question2.question);
      $('#option1').html(question2.option1);
      $('#option2').html(question2.option2);
      $('#option3').html(question2.option3);
      $('#option4').html(question2.option4);
      $('#result').html("");
      $('#correctAnswer').html("");
      console.log("question 2 set");

      option1.onclick = function correctAnswer() {
        clearInterval(counter);
        $('#questionArea').html("");
        $('#option1').html("");
        $('#option2').html("");
        $('#option3').html("");
        $('#option4').html("");
        $('#result').html(question1.correct + "<p></p>");
        $('#correctAnswer').html('<img src="assets/images/yellowstone_correct.jpg" />');
        setTimeout(function correctDelay() {

        }, 3000);
      }; // end option 1 on click

      option2.onclick = function wrongAnswer() {
        alert('WRONG 2');
      }; // end option 2 onclick

      option3.onclick = function wrongAnswer() {
        alert('wrong 3');
      }; // end option 3 onclick

      option4.onclick = function wrongAnswer() {
        alert('wrong 4');
      }; // end option 4 onclick
  }

  /**********************
  Time Outs
  **********************/
