$(function(){
								var $process	= $(".p-brief");
								var $holder = $("#processHolder");
								var $firstProcess	= $("#firstSlide");
								var $text = $(".ts-count");
								var $number = $('.p-number');
								var currentProcess = 0;
								var $progress = $("#processProgress");
								var delay = 5;
								var $processImage = $('.p-img');
								var $cover = $('.cover');
								var $nav = $(".p-head").find("p");
								$process.css({position : "absolute", top:"0px", left:"0px",width:"400px"});
								$number.css({position : "absolute", top:"60px", left:"0px",width:"400px"});
								$cover.css({position : "absolute"});
								//settings
								var transitionTime = 0.5;

								//Process text
								var totalProcess = $process.length;
								var oldProcess = 0;
								var currentProcess = -1;

								// Process Image details
								var widthImage = $processImage.width();
								var heightImage = $processImage.height();




				var tweenSlide = TweenLite.delayedCall(delay, nextSlide);
				var tweenProgress = TweenLite.fromTo( $progress, delay, {width:"0px"}, {width:"100%"} );
				TweenLite.fromTo($process.eq(oldProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
				TweenLite.fromTo($number.eq(oldProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
				TweenLite.to($nav.eq(oldProcess), transitionTime, {'font-weight':'bold', color:'#121212', 'font-size:':'20px'});
				$('.p-text').click(function(){
					tweenProgress.restart();
					tweenSlide.pause(0);
					var n = $(this).attr("data-id")
					tweenSlide =  TweenLite.delayedCall(0, randomSlide(n));
				 });
				 $('.cover').css({'width':widthImage,'height':heightImage,'opacity':1,'position':'absolute'});
				function nextSlide(){
						oldProcess = currentProcess;
						if (currentProcess < $process.length - 1) {
							currentProcess++;
						} else {
							currentProcess = 0;
						}
						TweenLite.to($nav.eq(oldProcess), transitionTime, {'font-weight':'400', color:'#c4c4c4', 'font-size:':'18px'});
						TweenLite.to($nav.eq(currentProcess), transitionTime, {'font-weight':'bold', color:'#121212', 'font-size:':'20px'});
						TweenLite.to($process.eq(oldProcess), transitionTime, {top:-20, alpha:0, rotationX: 90});
						TweenLite.fromTo($process.eq(currentProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
						TweenLite.to($number.eq(oldProcess), transitionTime, {top:-20, alpha:0, rotationX: 90});
						TweenLite.fromTo($number.eq(currentProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
						TweenLite.to($processImage.eq(oldProcess), transitionTime, {top:-20, alpha:0, rotationX: 90});
						TweenLite.fromTo($processImage.eq(currentProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
						TweenLite.fromTo($cover, 1, {scaleX:0, transformOrigin:"left"},{scaleX:0, transformOrigin:"right"});
						// imageSlide();
						tweenProgress = TweenLite.fromTo( $progress, delay, {width:"0px"}, {width:"100%"});
						tweenSlide = TweenLite.delayedCall(delay, nextSlide);
				}

				function randomSlide(n){
					oldProcess = currentProcess;
					currentProcess = n;
					TweenLite.to($nav.eq(oldProcess), transitionTime, {'font-weight':'400', color:'#c4c4c4', 'font-size:':'18px'});
					TweenLite.to($nav.eq(currentProcess), transitionTime, {'font-weight':'bold', color:'#121212', 'font-size:':'20px'});
					TweenLite.to($process.eq(oldProcess), transitionTime, {top:-20, alpha:0, rotationX: 90});
					TweenLite.fromTo($process.eq(currentProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
					TweenLite.to($number.eq(oldProcess), transitionTime, {top:-20, alpha:0, rotationX: 90});
					TweenLite.fromTo($number.eq(currentProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
					TweenLite.to($processImage.eq(oldProcess), transitionTime, {top:-20, alpha:0, rotationX: 90});
					TweenLite.fromTo($processImage.eq(currentProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
					tweenProgress = TweenLite.fromTo( $progress, delay, {width:"0px"}, {width:"100%"});
					tweenSlide = TweenLite.delayedCall(delay, nextSlide);
				}

				function imageSlide(){
					var tl = new TimelineLite();
					tl.from('.cover', 1, {scaleX:0, transformOrigin:"left"})
					  .to('.cover', 1, {scaleX:0, transformOrigin:"right"})
						// .to('.cover', 0, {scaleX:1, transformOrigin:"right"}, "reveal");

				}
			});
