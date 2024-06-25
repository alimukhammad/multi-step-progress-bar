let stepOne = document.getElementById('stepOne');

let stepTwoNext = document.getElementById('stepTwoNext');
let stepTwoPrev = document.getElementById('stepTwoPrev');

let stepThreeNext = document.getElementById('stepThreeNext');
let stepThreePrev = document.getElementById('stepThreePrev');

stepOne.addEventListener('click', function() {
    console.log('stepOne');
});

////////////////////////////////////

$(document).ready(function () { 
	var currentGfgStep, nextGfgStep, previousGfgStep; // defining current, next and previous element 
	var opacity;                // defining opacity
	var current = 1;        // defining current step
	var steps = $("fieldset").length;  //defining total number of steps

	setProgressBar(current);  //calling progress bar function

	$(".next-step").click(function () { //when next button is clicked, .next-step is a class of button

		currentGfgStep = $(this).parent(); // get the parent of button clicked, check the html code, this is the fieldset
		nextGfgStep = $(this).parent().next(); // get the next parent of button clicked, this is the next fieldset because we are in fieldset

		$("#progressbar li").eq($("fieldset").index(nextGfgStep)).addClass("active"); // add active class to the next fieldset

		nextGfgStep.show(); 				// show the next fieldset
		currentGfgStep.animate({ opacity: 0 }, { // animate the current fieldset to opacity 0 because we are going to hide it
			step: function (now) { // step function is called for each step in the animation, now is the current value of the animation
				opacity = 1 - now; // opacity is 1 - now, so it will decrease from 1 to 0

				currentGfgStep.css({ // css for current fieldset
					'display': 'none', 
					'position': 'relative'
				}); 
				nextGfgStep.css({ 'opacity': opacity }); // css for next fieldset, opacity will increase from 0 to 1
			}, 
			duration: 500 // duration of animation between current and next fieldset
		}); 
		setProgressBar(++current); // call progress bar function and increase the current step
	}); 

	$(".previous-step").click(function () { // when previous button is clicked, .previous-step is a class of button

		currentGfgStep = $(this).parent(); // get the parent of button clicked, check the html code, this is the fieldset
		previousGfgStep = $(this).parent().prev(); // get the previous parent of button clicked, this is the previous fieldset because we are in fieldset

		$("#progressbar li").eq($("fieldset").index(currentGfgStep)).removeClass("active"); // remove active class from the current fieldset

		previousGfgStep.show(); // show the previous fieldset

		currentGfgStep.animate({ opacity: 0 }, { 
			step: function (now) { 
				opacity = 1 - now; 

				currentGfgStep.css({ 
					'display': 'none', 
					'position': 'relative'
				}); 
				previousGfgStep.css({ 'opacity': opacity }); 
			}, 
			duration: 500 
		}); 
		setProgressBar(--current); 
	}); 

	function setProgressBar(currentStep) { // this function is used to set the progress bar according to the current step
		var percent = parseFloat(100 / steps) * current; // calculate the percent according to the current step
		percent = percent.toFixed(); // round off the decimal value
		$(".progress-bar").css("width", percent + "%") // set the width of the progress bar
	} 

	$(".submit").click(function () { // when the submit button is clicked
		return false; 
	}) 
}); 
