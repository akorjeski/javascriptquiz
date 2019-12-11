///These are my 5 questions
var questionOne = ["Bulbasaur","Squirtle","Pikachu","Jigglypuff"];
var questionTwo = ["100","55","60","58"];
var questionThree = ["Flareon","Vaporeon","Empoleon","Jolteon"];
var questionFour = ["Tropius","Aerodactyl","Omnastar","Kabuto"];
var questionFive = ["Machoke","Farfetch'd","Haunter","Kadabra"];
var getButton = document.getElementById("clickyboy");
var quiznavButton = document.getElementById("quizNavigate");
var PokemonQuizElement = document.getElementById("PokemonQuiz");
var getButtonHolder1 = document.getElementById("buttonholder1");
var getButtonHolder2 = document.getElementById("buttonholder2");
var getButtonHolder3 = document.getElementById("buttonholder3");
var getButtonHolder4 = document.getElementById("buttonholder4");
var getButtonHolder5 = document.getElementById("buttonholder5");
var gethighscoreForm = document.getElementById("leaderboardDiv");
var scoreDisplayerElement = document.getElementById("scoreDisplayer")
var timerDivEle = document.getElementById("countdown");
var quizBucketElement = document.getElementById("quizBucket");
var quizHeader = document.getElementById("quizheader");
var timeleft = 75; ///this is the clockmaster!!!!
var userScore = "";
var stopQuiz = 0;



///Function for initilizing the timer when you start the quiz.
function startTimer(){
    var downloadTimer = setInterval(function(){
    timerDivEle.innerHTML = timeleft + " seconds remaining";
    timeleft -= 1;
    if(stopQuiz === 1){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = userScore;
    }
    else if (timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "0";
}
}, 1000);
}
function deductTime(){
    timeleft = timeleft - 15;
}

function loguserScore(){
    stopQuiz = 1;
    userScore = timeleft;
    window.localStorage.setItem("quizscore", userScore);
    scoreDisplayerElement.innerText = (userScore);
    console.log(userScore);
}

function addScoretoLeaderboard(){

}
///Functions to create questions. These buttons are hidden by default, they will be changed by the controls.
function createQ1(){
    for (var i=0; i < questionOne.length; i++){
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", questionOne[i]);
        questionButton.setAttribute("class", "button");
        questionButton.textContent= questionOne[i];
        questionButton.style.display = 'none';
        getButtonHolder1.appendChild(questionButton);
    }
}
function createQ2(){
    for (var i=0; i < questionTwo.length; i++){
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", questionTwo[i]);
        questionButton.setAttribute("class", "button");
        questionButton.textContent= questionTwo[i];
        questionButton.style.display = 'none';
        getButtonHolder2.appendChild(questionButton);
    }
}
function createQ3(){
    for (var i=0; i < questionThree.length; i++){
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", questionThree[i]);
        questionButton.setAttribute("class", "button");
        questionButton.textContent= questionThree[i];
        questionButton.style.display = 'none';
        getButtonHolder3.appendChild(questionButton);
    }
}
function createQ4(){
    for (var i=0; i < questionFour.length; i++){
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", questionFour[i]);
        questionButton.setAttribute("class", "button");
        questionButton.textContent= questionFour[i];
        questionButton.style.display = 'none';
        getButtonHolder4.appendChild(questionButton);
    }
}
function createQ5(){
    for (var i=0; i < questionFive.length; i++){
        var questionButton = document.createElement("button");
        questionButton.setAttribute("id", questionFive[i]);
        questionButton.setAttribute("class", "button");
        questionButton.textContent= questionFive[i];
        questionButton.style.display = 'none';
        getButtonHolder5.appendChild(questionButton);
    }
}

function deleteQ1showQ2(){
    document.getElementById("Pikachu").style.display = 'none';
    document.getElementById("Bulbasaur").style.display = 'none';
    document.getElementById("Jigglypuff").style.display = 'none';
    document.getElementById("Squirtle").style.display = 'none';
    document.getElementById("100").style.display = 'inline-block';
    document.getElementById("55").style.display = 'inline-block';
    document.getElementById("60").style.display = 'inline-block';
    document.getElementById("58").style.display = 'inline-block';
}
function deleteQ2showQ3(){
    document.getElementById("100").style.display = 'none';
    document.getElementById("55").style.display = 'none';
    document.getElementById("60").style.display = 'none';
    document.getElementById("58").style.display = 'none';
    document.getElementById("Flareon").style.display = 'inline-block';
    document.getElementById("Vaporeon").style.display = 'inline-block';
    document.getElementById("Empoleon").style.display = 'inline-block';
    document.getElementById("Jolteon").style.display = 'inline-block';
}
function deleteQ3showQ4(){
    document.getElementById("Flareon").style.display = 'none';
    document.getElementById("Vaporeon").style.display = 'none';
    document.getElementById("Empoleon").style.display = 'none';
    document.getElementById("Jolteon").style.display = 'none';
    document.getElementById("Tropius").style.display = 'inline-block';
    document.getElementById("Aerodactyl").style.display = 'inline-block';
    document.getElementById("Omnastar").style.display = 'inline-block';
    document.getElementById("Kabuto").style.display = 'inline-block';
}
function deleteQ4showQ5(){
    document.getElementById("Tropius").style.display = 'none';
    document.getElementById("Aerodactyl").style.display = 'none';
    document.getElementById("Omnastar").style.display = 'none';
    document.getElementById("Kabuto").style.display = 'none';
    document.getElementById("Machoke").style.display = 'inline-block';
    document.getElementById("Farfetch'd").style.display = 'inline-block';
    document.getElementById("Haunter").style.display = 'inline-block';
    document.getElementById("Kadabra").style.display = 'inline-block';
}
function deleteQ5endQuiz(){
    document.getElementById("Machoke").style.display = 'none';
    document.getElementById("Farfetch'd").style.display = 'none';
    document.getElementById("Haunter").style.display = 'none';
    document.getElementById("Kadabra").style.display = 'none';
    ///add functionality to make next step after quiz is done
}
///Invoke the functions to create the hidden buttons.
createQ1();
createQ2();
createQ3();
createQ4();
createQ5();



///Event Listener for Start Quiz
getButton.addEventListener("click",function(){
    quizBucketElement.style.display = "none";
    PokemonQuizElement.style.display = "inline";
    startTimer();
    getButton.style.display = 'none';
    document.getElementById("Pikachu").style.display = 'inline-block';
    document.getElementById("Bulbasaur").style.display = 'inline-block';
    document.getElementById("Jigglypuff").style.display = 'inline-block';
    document.getElementById("Squirtle").style.display = 'inline-block';
})
///Event Listeners for all 20 buttons///

//Question 1 Buttons
document.getElementById("Pikachu").addEventListener("click", function(){
    console.log("Incorrect!")
    console.log(timeleft);
    deductTime();
    deleteQ1showQ2();
})
document.getElementById("Bulbasaur").addEventListener("click", function(){
    console.log("Correct!")
    deleteQ1showQ2();

})
document.getElementById("Jigglypuff").addEventListener("click", function(){
    console.log("Incorrect!")
    deductTime();
    deleteQ1showQ2();
    
})
document.getElementById("Squirtle").addEventListener("click", function(){
    console.log("Incorrect!");
    deductTime();
    deleteQ1showQ2();

})
///Question 2 Buttons
document.getElementById("100").addEventListener("click", function(){
    console.log("Incorrect!");
    deductTime();
    deleteQ2showQ3();
})
document.getElementById("55").addEventListener("click", function(){
    console.log("Correct!");
    deleteQ2showQ3();
})
document.getElementById("60").addEventListener("click", function(){
    console.log("Incorrect!");
    deductTime();
    deleteQ2showQ3();
})
document.getElementById("58").addEventListener("click", function(){
    console.log("Incorrect!");
    deductTime();
    deleteQ2showQ3();
})
///Question 3 Buttons
document.getElementById("Flareon").addEventListener("click", function(){
    console.log('Incorrect!');
    deductTime();
    deleteQ3showQ4();
})
document.getElementById("Vaporeon").addEventListener("click", function(){
    console.log('Incorrect!');
    deductTime();
    deleteQ3showQ4();
})
document.getElementById("Empoleon").addEventListener("click", function(){
    console.log('Correct!');
    deleteQ3showQ4();
})
document.getElementById("Jolteon").addEventListener("click", function(){
    console.log('Incorrect!');
    deductTime();
    deleteQ3showQ4();
})
///Question 4 Buttons
document.getElementById("Tropius").addEventListener("click", function(){
    console.log("Correct!");
    deleteQ4showQ5();
})
document.getElementById("Aerodactyl").addEventListener("click", function(){
    console.log("Incorrect!");
    deductTime();
    deleteQ4showQ5();
})
document.getElementById("Omnastar").addEventListener("click", function(){
    console.log("Incorrect!");
    deductTime();
    deleteQ4showQ5();
})
document.getElementById("Kabuto").addEventListener("click", function(){
    console.log("Incorrect!");
    deductTime();
    deleteQ4showQ5();
})
///Question 5 Buttons
document.getElementById("Machoke").addEventListener("click", function(){
    console.log("Incorrect!");
    deductTime();
    console.log("End of Quiz!");
    loguserScore();
    deleteQ5endQuiz();   
})
document.getElementById("Farfetch'd").addEventListener("click", function(){
    //write a function here for the end of the quiz! 
    console.log("Correct!");
    console.log("End of Quiz!");
    loguserScore();
    deleteQ5endQuiz();   
})
document.getElementById("Haunter").addEventListener("click", function(){
    //write a function here for the end of the quiz!
    console.log("Incorrect!");
    deductTime();
    console.log("End of Quiz!");
    loguserScore();
    deleteQ5endQuiz();    
})
document.getElementById("Kadabra").addEventListener("click", function(){
    //write a function here for the end of the quiz! 
    console.log("Incorrect!");
    deductTime();
    console.log("End of Quiz!");
    loguserScore();
    deleteQ5endQuiz();   
})