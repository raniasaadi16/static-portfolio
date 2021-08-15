$(document).ready(function(){
     $('.page-content').css("opacity","0");
     paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
        };
       Pace.on('done', function() {
        $('#preloader .p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));

        $('#preloader').delay(500).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

        $('.page-content').delay(100).css("opacity","1");

        TweenMax.from(".page-content", 2, {
             delay: 1,
               opacity: 0,
               ease: Expo.easeInOut
            });
       });
})
