$(function(){
	var ele = $('body').width();
	var halfScreen = ele/2;
	var animationPercentage = 0.2;
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
	var start  = $(this).attr('data-start');
	var end  = $(this).attr('data-end');
	$('.b-img').animate({opacity: 0}, 300, function(){
				// $('body').css({'background':'-webkit-linear-gradient(30deg,'+ start +','+end+')', 'color':'white'}).animate({opacity: 1});
				$('.b-img').css({'background-image': 'url("'+newImg+'")'}).animate({opacity: 0.1});
				// var src = "videos/meet.mp4";
				// $(".b-img").find("#vv").attr("src", src);
				// $('.b-img').find('#vv').css({}).animate({opacity: 0.1});
	  		// $(".b-img").find("#vv").attr("src", src);
				// $('.b-img').css().animate({opacity: 0.2});
        // $('.b-img').css({'background-image': 'url("'+newImg+'")'}).animate({opacity: 0.1});
    });
});


});


var scroller = {};
scroller.e = document.getElementById("move");

if (scroller.e.addEventListener) {

 scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
 scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
} else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

function MouseWheelHandler(e) {

 // cross-browser wheel delta
 var e = window.event || e;
 var delta = - 6 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));
 var fullWidth = $('.workCard').width() * 7;
 var pst = $('#move').scrollLeft() + delta;
 if (pst < 0) {
		 pst = 0;
 } else if (pst > fullWidth) {
		 pst = fullWidth;

 }
// animateDiv();
 $('#move').scrollLeft(pst);
 return false;
}

// function animateDiv(){
//  var windowCenter =  $(window).width() / 2;
//  var c = $('.workCard').length;
//  for (var i = 0; i < c; i++) {
// 	 var item = $($(".workCard")[i]);
// 	 var t = $($(".workCard")[i]).offset().left;
//   if(t> 0 && t < windowCenter){
// 		item.addClass("zoom");
//  }else{
// 	 item.removeClass("zoom");
//  }
//  }
//
// }
