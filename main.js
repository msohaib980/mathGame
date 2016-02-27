var array=[0];
var random = Math.ceil(Math.random()*9)
var newStars="<div class='star'><img src='http://i.imgur.com/kXH65I7.png'></div"


$(document).ready(init);
function init(){
	

    for(var i=0;i<random;i++){	
		$('#starbox').append(newStars)
    }   	

    $('.number').click(selection);
    // ID function for confirm button
    $('#decision').click(result);
    // ID function for reroll button
    $('#scramble').click(rollItAgain)
    // ID function for play agian button
    $('#play').click(playItAgain)


}



function selection(){
	var num = $(this).text();
	array.push(num);

	// sum global variable
	 sum= array.reduce(function(b,a){
		return Number(b)+Number(a)
	});

}

function result(){
	console.log(sum)
	if (sum===random){
		$("#displayboard").append('you got it')
		
	}else{
		// console.log('not working')
		$("#displayboard").append('next time')
	}

}

// 
function rollItAgain(){
  
		$('.star').remove();
		

}

function playItAgain( ){
	console.log('testing')
	location.reload();
}

