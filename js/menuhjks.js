$(document).ready(function(){
	$(".loader-overlay").delay(1000).fadeOut(500);
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		toggleNav($(this).hasClass( "open" ));
	});

$(".arrow-link").hover(function(){
	goRight($(this).find('.ts-link-arrow'));
},function(){

});




//Toggle nav to show and hide
	function toggleNav(tog){
		var tl = new TimelineLite();
		var $ham = $('.ham');
		var $nav = $('#myNav');
		if(tog){
			ripple();
			$('.nav').css('position','fixed');
			tl.to($nav, 0, {width:'100%',opacity:0})
			 .to($nav, 0.3, {display:'block',opacity:1})
			 .to($ham, 0.3, {color:'white'})
		}else{
			// $(body).css('overflow','hidden');
			rippleOut();
			tl.to($nav, 0, {width:'100%',opacity:1})
			 .to($nav, 0.3, {display:'none',opacity:0})
			 .to($ham, 0.3, {color:'black'})
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
