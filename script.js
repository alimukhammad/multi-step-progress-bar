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

		currentGfgStep = $(this).parent(); // get the parent of button clicked, chi
		nextGfgStep = $(this).parent().next(); 

		$("#progressbar li").eq($("fieldset").index(nextGfgStep)).addClass("active"); 

		nextGfgStep.show(); 
		currentGfgStep.animate({ opacity: 0 }, { 
			step: function (now) { 
				opacity = 1 - now; 

				currentGfgStep.css({ 
					'display': 'none', 
					'position': 'relative'
				}); 
				nextGfgStep.css({ 'opacity': opacity }); 
			}, 
			duration: 500 
		}); 
		setProgressBar(++current); 
	}); 

	$(".previous-step").click(function () { 

		currentGfgStep = $(this).parent(); 
		previousGfgStep = $(this).parent().prev(); 

		$("#progressbar li").eq($("fieldset").index(currentGfgStep)).removeClass("active"); 

		previousGfgStep.show(); 

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

	function setProgressBar(currentStep) { 
		var percent = parseFloat(100 / steps) * current; 
		percent = percent.toFixed(); 
		$(".progress-bar").css("width", percent + "%") 
	} 

	$(".submit").click(function () { 
		return false; 
	}) 
}); 
