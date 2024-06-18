$(document).ready(function() {
    
    
    //SCROLLTO
    $('.scrollTo').click(function(s) {
        s.preventDefault();
        
        scrollTo($(this));
    });
    
//    $('#home').addClass('active');
//    $('.btnMenu').addClass('active').delay(2000).addClass('animation');
//    
//    var time = 0.4;
//    $('.menu li').each(function(){
//        $(this).css('transition','all '+ time +'s'); 
//        time = time + 0.2;
//    });

    $('.btnMenu').click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('nav').removeClass('open');
            $('.menu li').removeClass('active');
        } else {
            $(this).addClass('open');
            $('nav').addClass('open');
            $('.menu li').each(function(){
                $(this).addClass('active'); 
            });
        }
    });

    
//    var ancho = $( window ).width();
//    
//    
//    if(ancho > 1024) {
//        $(document).scroll(function (e) {
//            var bodyScrollTop = $(window).scrollTop();
//            if(bodyScrollTop < 399) {
//                if($('nav').hasClass('fixed')){
//                    $('nav').removeClass('fixed');
//                    $('.languageExtra').fadeIn();
//                    $('.btnMenu').removeClass('open');
//                    $('nav').removeClass('open');
//                    $('.menu li').removeClass('active');
//               }
//            }else if (bodyScrollTop >= 400) {
//                $('nav').addClass('fixed');
//                $('nav').addClass('open');
//                $('.menu li').addClass('active');
//                $('.languageExtra').fadeOut();
//            }else {
//                $('nav').removeClass('fixed');
//                $('.languageExtra').fadeIn();
//            }
//        });
//    }
//    
//    if(ancho < 1025) {
//        $('nav').removeClass('open');
//        $('.btnMenu').removeClass('open');
//    }
//  


});

//FUNCIONES
function scrollTo(element) {
    var href = element.attr('href');
    var target = $(href).offset().top;
    var speed = 900;
    $("html, body").animate({ scrollTop: target - 80 }, speed);
}