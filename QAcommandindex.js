
let myquestNumber = 0;
var myScore = 0;

function newMakeQuestion () {
//    console.log("other 00");  
return newMakeQuestion (otherSTORE)
}
function newMakeQuestion () {
//    console.log("other 1");
  if (myquestNumber < otherSTORE.length) {
//    console.log(myScore);
    return `<div class="question-${myquestNumber}">
    <h2>${otherSTORE[myquestNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[0]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[1]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[2]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${otherSTORE[myquestNumber].answers[3]}" name="answer" required>
    <span>${otherSTORE[myquestNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;

} else {
 //   console.log("other 2");
//    console.log(myScore);
    renderOtherResults();
//    console.log(myScore);
    myrestartQuz();
//    console.log(myScore);
    $('.myquestNumber').text(10)
  }
}


//increment question number
function changemyquestNumber () {
//    console.log("other 3");
  //if (myquestNumber < otherSTORE.length) {
    myquestNumber ++;
  //}
  $('.myquestNumber').text(myquestNumber+1);
}

//tmk increment myscore issue
function changemyScore() {
//    console.log("other 4");
    myScore++;
    //tmk added
//    console.log(myScore);
    $('.myScore').text(myScore+1);
}

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function newstartQuiz () {
//    console.log("other 5");
    $('.newstartQuiz').on('click', '.otherstartButton', function (event) {
    $('.newstartQuiz').remove();
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.myquestNumber').text(1);
});
}

// render question in DOM
function myrenderQuestion () {
//    console.log("other 6");
  $('.questionAnswerForm').html(newMakeQuestion());
}

//user selects answer on submit run user feedback
function newuserSelectAnswer () {
//    console.log("other 7");
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
    if (answer === correctAnswer) {
        console.log("other 7A");
      selected.parent().addClass('correct');
      correctAnswerPicked();
    } else {
//         console.log("other 7B");
      selected.parent().addClass('wrong');
      WrongAnswer();
    }
  });
}

function correctAnswerPicked(){
//     console.log("other 8");
//     console.log(myScore);
    userAnswerFeedbackCorrect();
    updatemyScore();
}

function WrongAnswer () {
//     console.log("other 9");
  userWrongReply();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
// console.log("other 10");
// console.log(myScore);
let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${otherSTORE[myquestNumber].icon}" alt="${otherSTORE[myquestNumber].alt}"/></div><p><b>You got it right! it is</b><span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userWrongReply () {
//    console.log("other 11");
  let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
  // let iconImage = `${otherSTORE[myquestNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="wrongFeedback"><div class="icon"><img src="${otherSTORE[myquestNumber].icon}" alt="${otherSTORE[myquestNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updatemyScore() {
//    console.log("other 12");
//    console.log(myScore);
  changemyScore();
  $('.myScore').text(myScore);
}

//when quiz is over this is the html for the page
function renderOtherResults () {
//    console.log(myScore);
//    console.log("other 13");
    if (myScore === 10) {
//        console.log("other 13A");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Perfect</h3><img src="https://i.imgur.com/jDYqhnb.gif" alt="big green smile"/><p>You got ${myScore} / 10</p><p>You're ready for something advanced!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else if (myScore >= 7 && myScore < 10) {
//        console.log("other 13B");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Doing good</h3><img src="https://live.staticflickr.com/8245/8510728959_66154d2f76_n.jpg" alt="happy face"/><p>You got ${myScore} / 10</p><p>your getting there but I would still reseach!</p><button class="restartButton">Restart Quiz</button></div>`);
      }else if (myScore < 7 && myScore >= 5) {
//        console.log("other 13C");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>about half way there lets lets try this again!</h3><img src=" https://live.staticflickr.com/3272/2397892819_186678223c_n.jpg " alt="ant holding a stick "/><p>You got ${myScore} / 10</p><p>getting a low score at first is part of learing just try again!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else {
//        console.log("other 13D");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to get a school to teach you</h3><img src="https://i.imgur.com/yBdx3hg.jpg" alt="sad face"/><p>You got ${myScore} / 10</p><p>With more more time and effort you will get better keep at it</p><button class="restartButton">Restart Quiz</button></div>`);
      }
    }
//what happens when the user clicks next
function newrenderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
//    console.log("other 14");
    changemyquestNumber();
    myrenderQuestion();
    newuserSelectAnswer();
  });
}
//restart quiz function - reloads page to start quiz over
function myrestartQuz () {
//    console.log("other 00");  
  $('main').on('click', '.restartButton', function (event) {
//    console.log("other 15");
    location.reload();
  });
}
function callingyouNow(){
//    console.log("other 16");
    var buttoicked;
    $(".otherstartButton").click(function(){
    if( buttoicked != true ) {
      NextmadeQuiz ()
//        console.log("other 16A");
        buttoicked= true;
        NextmadeQuiz();
    }else{   
//        console.log("other 16B");
//        console.log(" man something else again");
    }
    })
    }
function showScores(){
//  console.log("fire");
      $(".show").show();
      $(".hide").hide();
  }      
//run quiz functions
function NextmadeQuiz () {
//    console.log("other 0");
  newstartQuiz();
  myrenderQuestion();
  newuserSelectAnswer();
  newrenderNextQuestion();
  showScores();
}
$(callingyouNow)
//$(NextmadeQuiz);
