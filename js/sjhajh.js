$(document).ready(function(){
	$(".loader-overlay").delay(1000).fadeOut(500);
	// $('#nav-icon1').click(function(){
	// 	$(this).toggleClass('open');
	// 	toggleNav($(this).hasClass( "open" ));
	// });

 slideTop($("#holder"));
$(".arrow-link").hover(function(){
	console.log('nn');
	goRight($(this).find('.ts-link-arrow'));
},function(){

});
//Slide text/object up
function slideTop(e){
console.log(e);
var $item = e;
	var tl = new TimelineLite();
	tl.to($item, 0.3, {y:50,opacity:0})
		 .to($item, 0, {y:-100,opacity:0})
		 .to($item, 0.2, {y:0,opacity:1});
}
function slideRight(i){
	var tl = new TimelineLite();
	var $item = i;
	tl.to($item, 0.4, {width:'90%',opacity:1})
		.to($item, 0.1, {width:'100%'});
}

function goRight(c){
		var tl = new TimelineLite();
		var $arrow = c;
		tl.to($arrow, 0.3, {x:50,opacity:0})
		 .to($arrow, 0, {x:-100,opacity:0})
		 .to($arrow, 0.2, {x:0,opacity:1});
}

//Toggle nav to show and hide
	// function toggleNav(tog){
	// 	var tl = new TimelineLite();
	// 	var $ham = $('.ham');
	// 	var $nav = $('#myNav');
	// 	if(tog){
	// 		ripple();
	// 		$('.nav').css('position','fixed');
	// 		tl.to($nav, 0, {width:'100%',opacity:0})
	// 		 .to($nav, 0.3, {display:'block',opacity:1})
	// 		 .to($ham, 0.3, {color:'white'})
	// 	}else{
	// 		$('.nav').css('position','relative');
	// 		// $(body).css('overflow','hidden');
	// 		rippleOut();
	// 		tl.to($nav, 0, {width:'100%',opacity:1})
	// 		 .to($nav, 0.3, {display:'none',opacity:0})
	// 		 .to($ham, 0.3, {color:'black'})
	// 	}
	//  }


$(function(){
	var n = true;
	$(window).scroll(function(){
		// changeColor($('.big-pad'));

		var i = $('#intro');
		var t = $('#testimonial');
		if(isScrolledIntoView(t)){
			fill($('.testimonial-detail'));
		}
		if(isScrolledIntoView(i) && n){
			console.log('calling right');
			slideRight($('.box-image video'));
			n = false;
		}
  });
});



function testLocation(){
//get the background color of the location


}

function changeColor(ele){
	var hamPos = $('.nav span').offset().top;
	var elePosTop = ele.offset().top;
	var elePosBottom = elePosTop +  ele.outerHeight();
	var tl = new TimelineLite();
	var $ham = $('.nav span');
	console.log("Ham = "+ hamPos+ " ElePosTop = "+elePosTop + " ElePosBot = "+elePosBottom);
	if (hamPos > elePosTop && hamPos < elePosBottom){
		tl.to($ham, 0.3, {background:'white'});
	}else{
		tl.to($ham, 0.3, {background:'black'});
	}
}

function fill(e){
	var tl = new TimelineLite();
	var $b = e;
			tl.to($b, 1, {width:'100%',opacity:1})
}
function fullWidth(elem){
	var tl = new TimelineLite();
	var $b = elem;
			tl.to($b, 0.1, {'background-color':'#121212'})
}




//Is on viewBox
function isScrolledIntoView(elem)
{
	var bottom_of_object = elem.offset().top + elem.outerHeight() - 300;
	var bottom_of_window = $(window).scrollTop() + $(window).height();
	/* If the object is completely visible in the window, fade it it */
	if( bottom_of_window > bottom_of_object ){
			return true;
	}
}

//Create menu ripple
function ripple(){
	var tl = new TimelineLite();
	var $c = $('.c-circle-overlay--ts');
			tl.to($c, 0, {opacity:1})
			tl.to($c, 0.5, {scale:90})
}

function rippleOut(){
	var tl = new TimelineLite();
	var $c = $('.c-circle-overlay--ts');
			tl.to($c, 0.5, {scale:1})
			tl.to($c, 0, {opacity:0})
			// tl.to($c,0, {scale:1})
}
//Arrow move up down animation
$(".circle-arrow").hover(function(){
				var tl = new TimelineLite();
	 			var $arrow = $(this).find('.arrow-behind');
				tl.to($arrow, 0.3, {y:50,opacity:0})
					 .to($arrow, 0, {y:-100,opacity:0})
					 .to($arrow, 0.2, {y:0,opacity:1});
    }, function(){
    });
});

//Menu options animations
$(".menu-text").hover(function(){
	var tl = new TimelineLite();
	var $text = $(this);
	tl.to($text, 0.5, {x:40});
	var img = $text.attr("data-name");
	console.log($text.attr("data-name"));
	menuSwitch(img);
	menuTextAnimatonIn($(this).find(".link-line"));
}, function(){
	var tl = new TimelineLite();
  var $text = $(this);
  tl.to($text, 0.5, {x:0});
	menuTextAnimatonOut($(this).find(".link-line"));
})

function menuSwitch(i){
	var tl = new TimelineLite();
	var $item = $('.menu-svg');
	var src = 'images/svg/'+i;
	// $('.menu-svg').attr("src",'images/svg/'+i)
	 tl.to($item, 0.5, {opacity:0})
		 .to($item, 0.3, {"src":src,opacity:1})
}

function menuTextAnimatonIn(c){
	var tl = new TimelineLite();
	var $item = c;
	 tl.to($item, 0, {x:-350,opacity:0})
		 .to($item, 0.5, {x:-90,opacity:1})
		 .to($item, 0.1, {opacity:0});
}

function menuTextAnimatonOut(a){
	var tl = new TimelineLite();
	var $arrow = a;
	tl.to($arrow, 0, {opacity:0});
}


$(".ts-box-arrow-holder").hover(function(){
	var tl = new TimelineLite();
	var $arrow = $(this).find('.ts-box-arrow');
	tl.to($arrow, 0.3, {x:50,opacity:0})
	 .to($arrow, 0, {x:-100,opacity:0})
	 .to($arrow, 0.2, {x:0,opacity:1});
},function(){

});

// TweenMax.staggerTo(".swap", 3, { opacity:0,transform:"translate(0, -20px) rotateX("+50+"deg)", ease:Linear.easeNone, repeat:-1},10);
$(function(){
			var $slogans = $("p.slogan").find("strong");
			var $holder = $("#holder");
      var $imageHolder = $("#imageHolder");
      var $images = $(".header-image").find("img");;
			//set via JS so they're visible if JS disabled
			$slogans.parent().css({position : "absolute", top:"0px", left:"0px"});
      $images.parent().css({position : "absolute", top:"0px", left:"0px"});

			//settings
			var transitionTime = 0.5;
			var slogansDelayTime = 3;

			//internal
			var totalSlogans = $slogans.length;
			var oldSlogan = 0;
			var currentSlogan = -1;
      var oldImage = 0;
			var currentImage = -1;

			//initialize
			switchSlogan();

			function switchSlogan(){
				oldSlogan = currentSlogan;
        oldImage = currentImage;
				if(currentSlogan < totalSlogans-1){
					currentSlogan ++;
          currentImage ++;
				} else {
					currentSlogan = 0;
          currentImage = 0;
				}
				TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top:-20, alpha:0, rotationX: 90});
				TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
        TweenLite.to($images.eq(oldImage), transitionTime, {top:-20, alpha:0, rotationX: 90});
				TweenLite.fromTo($images.eq(currentImage), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
				TweenLite.delayedCall(slogansDelayTime, switchSlogan);
			}
       $("#slogans").addClass("same-line");
		});

		$(function(){
		                var $slides	= $(".slide");
										var $firstSlide	= $("#firstSlide");
										var $text = $(".ts-count");
										var totalSlide = $("#container").children().length;

		                var currentSlide = 0;
										var slide_width = $slides.width();

										var $sliderBlack = $("#progress");
										var delay = 5

										// var tl = new TweenLite();
						TweenLite.set($slides.filter(":gt(0)"), {left:slide_width+"px"});
						var tweenSlide = TweenLite.delayedCall(delay, nextSlide);
						var tweenProgress = TweenLite.fromTo( $sliderBlack, delay, {width:"0px"}, {width:"100%"} );
						var tweenSlideAnimation = TweenLite.fromTo( $slides.eq(currentSlide), 1, {left: slide_width+"px"}, {left:"0px"} );
						$text.text("01 / 0"+totalSlide);
						function nextSlide(){
								var t = currentSlide;
								if (currentSlide < $slides.length - 1) {
									currentSlide++;
								} else {
									currentSlide = 0;
								}
								if(currentSlide == 0){
									TweenLite.fromTo($firstSlide, 0, {'z-index':'0'},{'z-index':'1'});
								}else{
									TweenLite.fromTo($firstSlide, 0, {'z-index':'1'},{'z-index':'0'});
								}
								var newCount = currentSlide+1;
							  tweenProgress = TweenLite.fromTo( $sliderBlack, delay, {width:"0px"}, {width:"100%"} );
								tweenSlideAnimation = TweenLite.fromTo( $slides.eq(currentSlide), 0.8, {left: slide_width+"px"}, {left:"0px"} );
								TweenLite.to( $slides.eq(t), 2, {left:"-"+slide_width+"px"});
								tweenSlide = TweenLite.delayedCall(delay, nextSlide);
								$text.text("0"+newCount+" / 0"+totalSlide);
						}

						function prevSlide(){
							 var t = currentSlide;
								if (currentSlide == 0) {
									currentSlide = $slides.length - 1;
								}
								else {
									currentSlide--;
								}
								var newCount = currentSlide+1;
							  tweenProgress = TweenLite.fromTo( $sliderBlack, delay, {width:"0px"}, {width:"100%"} );
								tweenSlideAnimation = TweenLite.fromTo( $slides.eq(currentSlide), 1, {left: slide_width+"px"}, {left:"0px"} );
								TweenLite.to( $slides.eq(t), 1, {left:"-"+slide_width+"px"} );
								tweenSlide = TweenLite.delayedCall(delay, nextSlide);
								$text.text("0"+newCount+" / 0"+totalSlide);
						}


						$('#tsright').click(function(){
    							tweenProgress.restart();
									tweenSlide.pause(0);
									tweenSlide = TweenLite.delayedCall(0, nextSlide);
						 });
						 $('#tsleft').click(function(){
     							tweenProgress.restart();
 									tweenSlide.pause(0);
 									tweenSlide = TweenLite.delayedCall(0, prevSlide);
 						 });

					});
