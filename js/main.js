//**********

// Psuedo Code for Rock Paper Scissors

// 0. pageReady
// 1. Set up click listener for scissors button.
// 2. Set up click listener for rock button.
// 3. Set up click listener for paper button.
// 4. Create a function to generate random computer choices. 
// 5. Create Variables & if / else / else if statements for RPS values
// 6. Create function to handle click for scissors.
//		(i) assess it against computer choice
// 7. Create function to handle click for rock.
//		(ii) assess it against computer choice
// 8. Create function to handle click for scissors. 
//		(iii) assess it against computer choice
// 9. Display comp. choice, user choice, and winner output & play again. 
// 10. Display "Play again" button 
// 11. Set up click listener for play again
// 12. Set up a function for play again
//		(i) button should show initial  RPS choices
//		(ii) start the game over / hide previous game results
//		(iii) generate a new random number from the computer
// 11. Loop


$(document).ready(pageReady);

	function pageReady() {

	$(".throw-button").click(hideButtons);
	// $(".throw-button").click(computerPlay);
	// $(".throw-button").click(userPlay);


$("throw-button rock").click(buttonRock);

	function hideButtons(){
		event.preventDefault();
		$("#show-this-on-throw").slideDown(700);
		$(".button-container").hide();
		$("#show-this-on-throw computers").show();
		// $(this).siblings("#show-this-on-throw").show();
	}

/***************

HOVER STATES

****************/



$( ".scissors" ).hover(function showRollover() {
	event.preventDefault();
    $(this).addClass("scissors-hover");

	 }, function removeRollover() {
	 	event.preventDefault();
	    $(this).removeClass("scissors-hover");
	} );

	$( ".paper" ).hover(function showRollover() {
		event.preventDefault();
	    $(this).addClass("paper-hover");

	 }, function removeRollover() {
	 	event.preventDefault();
	    $(this).removeClass("paper-hover");
	} );

	$( ".rock" ).hover(function showRollover() {
		event.preventDefault();
	    $(this).addClass("rock-hover");

	 }, function removeRollover() {
	 	event.preventDefault();
	    $(this).removeClass("rock-hover");
	} );

}

/***************

USER CHOICE INPUT

****************/



function buttonRock () {
	// document.getElementsByClassName("my-throw");
	$(".my-throw").text("Rock");
	console.log("clicked rock");
}


function buttonPaper () {
	// document.getElementsByClassName("my-throw");
	$(".my-throw").text("Paper");
	console.log("clicked paper");
}


function buttonScissors () {
	// document.getElementsByClassName("my-throw");
	$(".my-throw").text("Scissors");
	console.log("clicked scissors");
}


// var userChoice;

// function userPlay () {

// var rock = document.getElementsByClassName(".throw-button .paper");
// var rockName = ["Rock"];

// userChoice = rockName

// // var rockName = document.getElementsByClassName("my-throw");
// // rockName.innerHTML = "!!! " + rock + " ???";
// 	console.log("clicked rock");
// }

// function buttonRock(rock) {
//   event.preventDefault();
//   console.log("clicked rock");
//   $(".my-throw").text(rock.value);
// }

// function buttonName(paper) {
//   event.preventDefault();
//   console.log("clicked paper");
//   $(".my-throw").text(paper.value);
// }

// function buttonName(scissors) {
//   event.preventDefault();
//   console.log("clicked scissors");
//   $(".my-throw").text(scissors.value);
// }

/***************

COMPUTER CHOICE VARIALBE

****************/


var computerChoice;

// Generates random computer choice
function computerPlay() {
  var randomNum = getRandomInt(0, 2);
  var choices = ["Rock", "Paper", "Scissors"];
  
  computerChoice = choices[randomNum];
}

// Generates random number from range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


// Demonstration of how to generate random computer choice.
computerPlay();
console.log(computerChoice);
$(".computers").text(computerChoice);

// userPlay();
// console.log("snake Eyes");
// $(".my-throw").text(userChoice);


/***************

PLAY AGAIN 

****************/

$(document).on("click", "#playagain", function(){

	    $("#show-this-on-throw").slideUp(300);
		$("#show-this-on-throw computers").hide();
		$(".button-container").show();
		    // location.reload(true);
});


