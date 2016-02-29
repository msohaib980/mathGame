// 'use strict';
var array = [];
var counter = 0;
var limit = 5;




var random = Math.ceil(Math.random() * 9);
var newStars = "<div class='star'><img src='http://i.imgur.com/kXH65I7.png'></div>";

$(document).ready(init);

function init(){
	// for (var i = 0; i < random; i++){
	// 	$('#starbox').append(newStars);
	// 	// Create Event Handler for selectNumbers Function		
	// }



	$('.numbers').click(sumNumbers);
	$('#checked').click(confirm);
	$('.numbers').click(toggleButton);
	$('#playagain').click(playItAgain);
	$('#reroll').click(rollItAgain);
	randomFunction()

}



function randomFunction(){
	$('#starbox').empty();
	random = Math.ceil(Math.random() * 9);
	for (var i = 0; i < random; i++){
		$('#starbox').append(newStars);
	}
}	

//selectNumbers function
function sumNumbers(){
	var num  = $(this).text();
	// $(this).css('background-color', 'red');
	array.push(parseFloat(num));
	// console.log(array);
	sum = array.reduce(function(a, b){
		return parseFloat(a) + parseFloat(b);
	});
	console.log('sum: ', sum);
}


function toggleButton(){
 
	$(this).toggleClass('select');

}

function confirm(){
	console.log('sum: ', sum);
	console.log('random: ', random);
	if (sum === random){
		$('#displayResult').text("Correct!");
		// $('.select').css('display', 'none');
	} else {
		$('#displayResult').text("Wrong, try again!!");
	}

	$('.select').remove();
}




function rollItAgain(){
	array =[];

 	if(counter < limit){
		randomFunction();
		counter++;
	} else {
		$('#reroll').attr('disabled', 'disabled');		
	}			
}

function playItAgain(){

	location.reload();
}