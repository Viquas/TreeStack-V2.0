$(function(){


$( document ).ready(function() {

    // Resive video
    // scaleVideoContainer();
		//
    // initBannerVideoSize('.adCard .poster img');
    // initBannerVideoSize('.adCard .filter');
    // initBannerVideoSize('.adCard video');
		//
    // $(window).on('resize', function() {
    //     scaleVideoContainer();
    //     scaleBannerVideoSize('.adCard .poster img');
    //     scaleBannerVideoSize('.adCard .filter');
    //     scaleBannerVideoSize('.adCard video');
    // });

});


function scaleVideoContainer() {
    var height = $('.adCard').height();
		var width = $('.adCard').width();
    var unitHeight = parseInt(height) + 'px';
    $('.adCard').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

var windowWidth = $('.adCard').width(),
		windowHeight = $('.adCard').height(),
		videoWidth,
		videoHeight;
    // var windowWidth = $('.homepage-hero-module').width(),
    //     windowHeight = $('.homepage-hero-module').height(),
    //     videoWidth,
    //     videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width'),
            windowAspectRatio = windowHeight/windowWidth;

        if (videoAspectRatio > windowAspectRatio) {

            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({'top' : -(videoHeight - windowHeight) / 2 + 'px', 'margin-left' : 0});
        } else {
					console.log('front');
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px','top':'0px'});
        }

        $(this).width(videoWidth).height(videoHeight);


    });
}
});
