let questionNumber = 0;
let scoreA = 0;


//generate question html
function generateQuestion () {
//    console.log("store 00");
return generateQuestion(STORE)
}
function generateQuestion () {
//    console.log("store 1");
  if (questionNumber < STORE.length) {
//    console.log(questionNumber);
//    console.log(scoreA);
//    console.log(questionNumber);
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} else {
//    console.log("store 2");
    renderResults();
//    console.log(scoreA);
    restartQuiz();
//    console.log(scoreA);
    $('.questionNumber').text(10);
//    console.log(scoreA);
  }
}

//increment question number
function changeQuestionNumber () {
//    console.log("store 3");
    questionNumber++;
//    console.log(scoreA);
//    console.log(questionNumber);
  $('.questionNumber').text(questionNumber+1);
//  console.log(scoreA, "after q");
//  console.log(questionNumber);
}

//increment score
function changeScoreA () {
//    console.log("store 4");
//    console.log(scoreA, "before");
  scoreA++;
//  console.log(scoreA, "after");
 $('.scoreA').text(scoreA+1);
}
//starting quiz
function startQuiz () {
//    console.log("store 5");
    $('.quizStart').on('click', '.startButton', function (event) {
    $('.newstartQuiz').remove();
    $('.quizStart').remove();
    $('.myScore').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
//    console.log(scoreA);
});
}

// render question in DOM
function renderQuestion () {
//console.log("store 6");
  $('.questionAnswerForm').html(generateQuestion());
}

//user selects answer on submit run user feedback
function userSelectAnswer () {
//    console.log("store 7");
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
//        console.log("store 8");
//        console.log(scoreA);
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
//        console.log("store 9");
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
// console.log("store 10");
theAnswerFeedbackCorrect();
//console.log($('.scoreA', "hi over here"));
updateScoreA ()
}

function ifAnswerIsWrong () {
//    console.log("store 101");
    userAnswerFeedbackWrong();
}

//user feedback for correct answer
function theAnswerFeedbackCorrect () {
//    console.log("store 11");
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong () {
//    console.log("store 12");
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  let icon  = 'https://i.imgur.com/3nWGV9zb.jpg';
  $('.questionAnswerForm').html(`<div class="wrongFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScoreA () {
//    console.log("store 13");
  changeScoreA();
  $('.scoreA').text(scoreA);
}

//when quiz is over this is the html for the page
function renderResults() {
//    console.log("store 14");
    if (scoreA === 10) {
//        console.log("store 15");
//        console.log(scoreA);
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Perfect</h3><img src="https://i.imgur.com/jDYqhnb.gif" alt="big green smile"/><p>You got ${scoreA} / 10</p><p>You're ready for something advanced!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else if (scoreA >= 7 && scoreA < 10) {
//        console.log("store 16");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Doing good</h3><img src="https://live.staticflickr.com/8245/8510728959_66154d2f76_n.jpg" alt="happy face"/><p>You got ${scoreA} / 10</p><p>your getting there but I would still reseach!</p><button class="restartButton">Restart Quiz</button></div>`);
      }else if (scoreA < 7 && scoreA >= 4) {
//        console.log("store 17");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost had it, lets try this again!</h3><img src="  https://i277.photobucket.com/albums/kk66/manbat_bucket/animated183.gif " alt="ant holding a stick "/><p>You got ${scoreA} / 10</p><p>getting a low score at first is part of learing just try again!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else {
//        console.log("store 18");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to get a school to teach you</h3><img src="   https://i.imgur.com/yBdx3hg.jpg " alt="sad face"/><p>You got ${scoreA} / 10</p><p>With more more time and effort you will get better keep at it</p><button class="restartButton">Restart Quiz</button></div>`);
      }
    }
//what happens when the user clicks next
function renderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
//    console.log("store 19");
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}
//restart quiz function - reloads page to start quiz over
function restartQuiz () {
//    console.log("store 20");
   $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}
function callingyou () {
//    console.log("store 21");
    var buttonclicked;    
    $(".startButton").click(function(){      
    if( buttonclicked != true ) {
        buttonclicked= true;
        createQuiz();
 //       console.log('store 22 ');
    }else{
 //       console.log("store 23");
    }
    })
    }
    function showotherScores(){
//     console.log("fire");
          $(".show").hide();
          $(".hide").show();
      }      
     function locos(){
      $('main').on('click', '.logo', function (event) {
        alert("dont click the logo")
      })
    }
//run quiz functions
function createQuiz () {      
//    console.log('store 24');
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
  showotherScores();
  locos()
}
$(callingyou);
