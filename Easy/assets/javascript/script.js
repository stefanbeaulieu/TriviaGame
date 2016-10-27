$( document ).ready(function() {

  $('#buttonArea').html('<button class="btn" id="btn" type="button" name="button">Start</button>');

  $('#buttonArea').on("click", function begin() {
    pageLoad();
  });

});

var questionCount = 0;

var correct = 0;

var wrong = 0;

var count = 3;

var counter;

var clicked = false;

function subtractor()
  {
    counter = setInterval(countDown, 1000);
  }

function countDown()
  {

    count--;

      if (count === 0) {
        clearInterval(counter);
      }

      document.getElementById("timer").innerHTML= "Time Remaining:  " + count + " seconds";
  }

function pageLoad() {

  subtractor();
  countDown();

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
  $('#q6').html('<form><input type="radio" name="question6" id="bigdipper"> Big Dipper <input type="radio" name="question6" id="littledipper">  Little Dipper <input type="radio" name="question6" id="north"> North <input type="radio" name="question6" id="kanye"> Kanye</form><br>');

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

    // Question 6
    if (north.checked) {
      correct++;
      console.log("correct: " + correct);
    } else if (bigdipper.checked || littledipper.checked || kanye.checked) {
      wrong++;
      console.log("wrong: " + wrong);
    }

    $('#question1Area').empty();
    $('#q1').empty();
    $('#question2Area').empty();
    $('#q2').empty();
    $('#question3Area').empty();
    $('#q3').empty();
    $('#question4Area').empty();
    $('#q4').empty();
    $('#question5Area').empty();
    $('#q5').empty();
    $('#question6Area').empty();
    $('#q6').empty();
    $('#submitArea').empty();
    $('#correctDisplay').html("You have " + correct + "!");
    $('#wrongDisplay').html("You have " + wrong + "!");
    $('#buttonArea').html('<button class="btn" id="btn" type="button" name="button">Start</button>');
    $('#buttonArea').on("click", function begin() {
      pageLoad();
      count = 90;

    });

  });

}
