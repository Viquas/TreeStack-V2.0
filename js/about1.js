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
								var $nav = $(".p-head").find("p");
								$process.css({position : "absolute", top:"0px", left:"0px",width:"400px"});
								$number.css({position : "absolute", top:"60px", left:"0px",width:"400px"});
								//settings
								var transitionTime = 0.5;

								//Process text
								var oldProcess = 0;
								var currentProcess = -1;

								// Process Image details
								// var widthImage = img.width();
								// var heightImage = img.height();
								// $('.cover').css({'width':w,'height':h});
								// var tl = new TimelineLite();
								// tl.from('.cover', 1, {scaleX:0, transformOrigin:"left"})
			  				//   .to('.cover', 1, {scaleX:0, transformOrigin:"right"}, "reveal")
								// 	.to('.cover', 0, {sctomaleX:1, transformOrigin:"right"}, "reveal")
			  				//   .from(img, 1, {opacity:0}, "reveal");
				var tweenSlide = TweenLite.delayedCall(delay, nextSlide(-1));
				var tweenProgress = TweenLite.fromTo( $progress, delay, {width:"0px"}, {width:"100%"} );
				TweenLite.fromTo($process.eq(oldProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
				TweenLite.fromTo($number.eq(oldProcess), transitionTime, {top:20, alpha:0, rotationX: -90 }, {top:0, alpha:1, rotationX:0});
				TweenLite.to($nav.eq(oldProcess), transitionTime, {'font-weight':'bold', color:'#121212', 'font-size:':'20px'});
				$('.p-text').click(function(){
					tweenProgress.restart();
					tweenSlide.pause(0);
					var n = $(this).attr("data-id")
					tweenSlide =  TweenLite.delayedCall(0, nextSlide(n));
				 });

				function nextSlide(n){
					oldProcess = currentProcess;

						//  currentProcess = n;

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
						tweenProgress = TweenLite.fromTo( $progress, delay, {width:"0px"}, {width:"100%"});
						tweenSlide = TweenLite.delayedCall(delay, nextSlide(-1));
				}
			});
