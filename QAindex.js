
let myquestNumber = 0;
var myScore = 0;
var totally = 0;
function newMakeQuestion () {
    console.log("other 00");  
return newMakeQuestion (otherSTORE)
}
function newMakeQuestion () {
    console.log("other 1 newMakeQuestion");
  if (myquestNumber < otherSTORE.length) {
    console.log(myquestNumber);
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
    <button type="submit" class="submitButton">Next</button>
    </fieldset>
    </form>
    </div>`;

} else {
    console.log("other 212 newMakeQuestion");
    console.log(myquestNumber);
    renderOtherResults();
    myrestartQuz();
    $('.myquestNumber').text(10)
    console.log(myquestNumber);
  }
}


//increment question number
function changemyquestNumber () {
    console.log("other question 122", myquestNumber);
  //if (myquestNumber < otherSTORE.length) {
    myquestNumber++;
  //}
  console.log("other question 2232", myquestNumber);
  $('.myquestNumber').text(myquestNumber+1);
  console.log("other question 2313", myquestNumber);
}

//tmk increment myscore issue
function changemyScore() {
    console.log("other 425");
    myScore++;
    //tmk added
    console.log(myquestNumber);
    $('.myScore').text(myScore+1);
}



//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function newstartQuiz () {
    console.log("other 545");
    console.log(myquestNumber);
    $('.newstartQuiz').on('click', '.otherstartButton', function (event) {
    $('.newstartQuiz').remove();
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.myquestNumber').text(1);
    console.log("other question 54522", myquestNumber);
});
}

// render question in DOM
function myrenderQuestion () {
    console.log("other 61221");
    console.log(myquestNumber);
  $('.questionAnswerForm').html(newMakeQuestion());
}

//user selects answer on submit run user feedback
function newuserSelectAnswer () {
    console.log("other 7112");
    console.log(myquestNumber);
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
    console.log("other question 51112", myquestNumber);
    if (answer === correctAnswer) {
        console.log("other 7A");
      selected.parent().addClass('correct');
      correctAnswerPicked();
    } else if(answer != correctAnswer){
         console.log("other 7B");
      selected.parent().addClass('wrong');
      WrongAnswer();
    }else{
      console.log("more issues with other 7");
      console.log(myquestNumber);
    }
  });
}

function correctAnswerPicked(){
     console.log("other 8111");
     console.log(myquestNumber);
    userAnswerFeedbackCorrect();
    updatemyScore();
}

function WrongAnswer () {
     console.log("other 9");
     console.log(myquestNumber);
  userWrongReply();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect () {
 console.log("other 1000");
 console.log(myquestNumber);
 console.log(myquestNumber);
let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
console.log("other question 6", myquestNumber);
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${otherSTORE[myquestNumber].icon}" alt="${otherSTORE[myquestNumber].alt}"/></div><p><b>You got it right! it is</b><span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userWrongReply () {
   console.log("other 11");
   console.log(myquestNumber);
  let correctAnswer = `${otherSTORE[myquestNumber].correctAnswer}`;
  console.log("other question 711121", myquestNumber);
  // let iconImage = `${otherSTORE[myquestNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="wrongFeedback"><div class="icon"><img src="${otherSTORE[myquestNumber].icon}" alt="${otherSTORE[myquestNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updatemyScore() {
    console.log("other 12000");
    console.log(myquestNumber);
  changemyScore();
  $('.myScore').text(myScore);
}

//when quiz is over this is the html for the page
function renderOtherResults () {
    console.log(myScore);
    console.log(scoreA);
    console.log(myquestNumber);
    console.log("other 13rrt4");
    if (myScore === 10 && scoreA >= 7) {
      console.log("other 13A", scoreA);
      showCaseofTotal();
      $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Perfect</h3><img src="https://live.staticflickr.com/6039/6363770939_3e77684745_n.jpg" alt="big green smile"/><p> WOW!! You are great ${myScore}/10 for the first and  ${scoreA}/10 for the second</p><p>maybe you should become a programer</p><button class="restartButton">exit to main</button></div>`);
    } else if (myScore === 10) {
        console.log("other 13A", scoreA);
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Perfect</h3><img src="https://i.imgur.com/jDYqhnb.gif" alt="big green smile"/><p>perfect on this one ${myScore} / 10</p><p>You're ready for something advanced!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else if (myScore >= 7 && myScore < 10) {
        console.log("other 13B", scoreA);
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Doing good</h3><img src="https://live.staticflickr.com/8245/8510728959_66154d2f76_n.jpg" alt="happy face"/><p>You got ${myScore} / 10</p><p>your getting there but I would still reseach!</p><button class="restartButton">Restart Quiz</button></div>`);
      }else if (myScore < 7 && myScore >= 5) {
        console.log("other 13C", scoreA);
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>about half way there lets lets try this again!</h3><img src=" https://live.staticflickr.com/3272/2397892819_186678223c_n.jpg " alt="ant holding a stick "/><p>You got ${myScore} / 10</p><p>getting a low score at first is part of learing just try again!</p><button class="restartButton">Restart Quiz</button></div>`);
      } else {
        console.log("other 13D");
        $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to get a school to teach you</h3><img src="https://i.imgur.com/yBdx3hg.jpg" alt="sad face"/><p>You got ${myScore} / 10</p><p>With more more time and effort you will get better keep at it</p><button class="restartButton">Restart Quiz</button></div>`);
      }
    }
//what happens when the user clicks next
function newrenderNextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    console.log("other 142223");
    console.log(myquestNumber);
    changemyquestNumber();
    myrenderQuestion();
    newuserSelectAnswer();
  });
}
//restart quiz function - reloads page to start quiz over
function myrestartQuz () {
    console.log("other 0012");  
    console.log(myquestNumber);
  $('main').on('click', '.restartButton', function (event) {
    console.log("other 15");
    location.reload();
  });
}
function callingyouNow(){
    console.log("other 16sds");
    console.log(myquestNumber);
    totalScores();
    var buttoicked;
    $(".otherstartButton").click(function(){
    if( buttoicked != true && scoreA != 0) {
      console.log(myquestNumber);
    //  NextmadeQuiz ()
        console.log("other 16A");
        console.log(myquestNumber);
        buttoicked= true;
        NextmadeQuiz();
    }else if( buttoicked != true && scoreA != 0) {
      console.log(myquestNumber);
    //  NextmadeQuiz ()
        console.log("other 16A");
        console.log(myquestNumber);
        buttoicked= true;
        otherNextmadeQuiz();
    }else{   
        console.log("other 16B");
        console.log(" man something else again");
    }
    })
    }
    // this shows only grand total scores
    function totalScores(){
      console.log("i ran");
      $(".hide").hide();
      $(".show").hide();
      $(".AllquestionNumber").hide();
      $(".questionNumber").hide();
      $(".totally").show();
    }

function showCaseofTotal(){
  console.log("getting into car");
  totallyAll();
  totalScores();
  
}
function totallyAll(){
  console.log("i ran too");
  $('.totally').text(totally+myScore+scoreA);
  console.log(totally+myScore+scoreA);
}

//this shows question and score for part2
function showScores(){
  console.log("fire");
      $(".show").show();
      $(".myScore").show();
      $(".AllquestionNumber").show();      
      $(".questionNumber").show();
      $(".hide").hide();
      $(".totally").hide();
  }      
//run quiz functions
function otherNextmadeQuiz(){
  console.log("please work 0");
  newstartQuiz();
  myrenderQuestion();
  newuserSelectAnswer();
  newrenderNextQuestion();
  showCaseofTotal()
}
function NextmadeQuiz() {
    console.log("other 0");
  newstartQuiz();
  myrenderQuestion();
  newuserSelectAnswer();
  newrenderNextQuestion();
  showScores();
}
$(callingyouNow)
//$(NextmadeQuiz);
