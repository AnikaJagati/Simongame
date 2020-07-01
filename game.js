//alert("hi");
var level=0;
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var userClickedPattern=[];

function nextsequence(){
    $("#level-title").text("Level "+ level);
    console.log("new level:",level);
    level++;
    countinputs=0;
    var randomno=Math.floor(Math.random()*4);
    randomChosenColour=buttonColors[randomno];
    gamePattern.push(randomChosenColour);
   // console.log(gamePattern);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    console.log("game:",gamePattern);
}

var countinputs=1;
$(".btn").click(function(){
    countinputs+=1;
    userChosenColour=(this.id);
    userClickedPattern.push(userChosenColour);
   // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log("user:",userClickedPattern);
    if(countinputs+1>level){
    checkSeq();
    userClickedPattern=[];
    nextsequence();
    }
    else{
        checkSeq();
    }
   
})

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    window.setTimeout(function (){
        $("#"+currentColor).removeClass("pressed");
    },200);
}

function checkSeq(){
        //console.log(count);
        if(gamePattern[countinputs-1]!==userClickedPattern[countinputs-1]){
           console.log("wrong");
           var audio=new Audio("sounds/wrong.mp3");
           audio.play();
           $("body").addClass("game-over");
           window.setTimeout(function (){
            $("body").removeClass("game-over");
            },200);
           restart();
           //break;
        }
        else{
            console.log("success");
        }  
}

//started variable to ensure keypress only allows the game to be started once
var started= false;
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextsequence();
      started = true;
    }
  });

function restart(){
//console.log("oops..gameover!");
$("#level-title").text("Game Over, Press Any Key to Restart");
level=0;
gamePattern=[];
userClickedPattern=[];
started= false;
}






