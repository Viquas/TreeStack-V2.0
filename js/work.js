$(function(){
	var ele = $('body').width();
	var halfScreen = ele/2;
	var animationPercentage = 0.2;
	console.log(ele);
	// $( ".work-station" ).mousemove(function( event ) {
  // var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  // var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
	// var horizontalDistance = 0;
	// if(event.pageX > halfScreen){
	// 	horizontalDistance = event.pageX - halfScreen;
	// 	var pos = $('div.overflow-hidden').scrollLeft() + horizontalDistance;
	// 	// $('.work-station').animate( { scrollLeft: pos }, 1000 );
	// 	// $this.style.transform = "translateX(-100px)";
	// 	// this.element.style.transform = "translateX(-" + animationPercentage * horizontalDistance + "px)";
	// 	// console.log(animationPercentage*horizontalDistance);
	// }else{
	// 	horizontalDistance = halfScreen - event.pageX;
	// }

// });


$(".workCard").hover(function(){
	var newImg = $(this).find('img').attr('src');
	console.log('../'+newImg);
	$('.b-img').animate({opacity: 0}, 200, function(){
        $('.b-img').css({'background-image': 'url("'+newImg+'")'}).animate({opacity: 0.1});
    });
});
//
});
