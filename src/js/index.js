import $ from 'jquery';


import Markers from './markers';
import Place from './place';
import places from './places';

var sfMarker = new Markers();
var parisMarker = new Markers();
var sfQuestion = new Place(places[0].correctAnswer);



$(".map").append(sfMarker.render(150, 200, 'SF'));
$(".map").append(parisMarker.render(400, 100, 'paris'));




$(".img-wrapper").on('click', '.SF', function(){
	$(event.currentTarget).append(sfQuestion.render(places[0].message))
});


$(".img-wrapper").on('click', '.paris', function(){
	$(event.currentTarget).append(sfQuestion.render(places[1].message))
});


// function checkAnswer(correctAnswer){
	
// 	}
// }


// $(".question-box-wrapper").on('click', 'button', function(event, correctAnswer){
// 	if (event.target.textContent === correctAnswer){
// 		$(".question-box-wrapper").append("you're right!")
// };
// });


