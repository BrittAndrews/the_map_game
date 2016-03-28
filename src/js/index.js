import $ from 'jquery';


import Markers from './markers';
import Place from './place';
import places from './places';

var sfMarker = new Markers();
var parisMarker = new Markers();
var mumbaiMarker = new Markers();
var shanghaiMarker = new Markers();
var tokyoMarker = new Markers();
var newyorkMarker = new Markers();
var capetownMarker = new Markers();
var sfQuestion = new Place(places[0].correctAnswer);



$(".map").append(sfMarker.render(240, 280, 'SF'));
$(".map").append(parisMarker.render(670, 270, 'paris'));
$(".map").append(mumbaiMarker.render(922, 380, 'mumbai'));
$(".map").append(shanghaiMarker.render(1075, 350, 'shanghai'));
$(".map").append(tokyoMarker.render(1140, 315, 'tokyo'));
$(".map").append(newyorkMarker.render(410, 300, 'newyork'));
$(".map").append(capetownMarker.render(740, 570, 'capetown'));



$(".img-wrapper").on('click', '.SF', function(){
	$(event.currentTarget).append(sfQuestion.render(places[0].message))
});


$(".img-wrapper").on('click', '.paris', function(){
	$(event.currentTarget).append(sfQuestion.render(places[1].message))
});

$(".img-wrapper").on('click', '.mumbai', function(){
	$(event.currentTarget).append(sfQuestion.render(places[2].message))
});

$(".img-wrapper").on('click', '.shanghai', function(){
	$(event.currentTarget).append(sfQuestion.render(places[3].message))
});

$(".img-wrapper").on('click', '.tokyo', function(){
	$(event.currentTarget).append(sfQuestion.render(places[4].message))
});

$(".img-wrapper").on('click', '.newyork', function(){
	$(event.currentTarget).append(sfQuestion.render(places[5].message))
});

$(".img-wrapper").on('click', '.capetown', function(){
	$(event.currentTarget).append(sfQuestion.render(places[6].message))
});



// var myTimer = setInterval(function(){ alert("you won"); }, 2000);
// clearInterval(myTimer);


setTimeout(function(){
  $(".app").html(`<div class="congrats">CONGRATS! <br>You Win</div>`);
}, 20000)




