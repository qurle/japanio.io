var main = function() {
    // Спрятать меню в мобильных устройствах
    $('.button').hide();
    $('.hb_h').hide();
    $('.logo').hover(function() {
        $('.hb_h').show();
    });
    
    // Слайдер по таймеру
    setInterval(function() {
        var curSlide = $('.slide-active');
        var curDot = $('.dot-active');
        
        var nextSlide = curSlide.next();
        var nextDot = curDot.next();
        
        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        curSlide.fadeOut(300).removeClass('slide-active');
        setTimeout(function() {
            nextSlide.fadeIn(300).addClass('slide-active');    
        }, 300);
        
        curDot.removeClass('dot-active');
        nextDot.addClass('dot-active');    
    }, 5000);  

    // Рестарт таймера
   $('.restart').click(function() {
        var curSlide = $('.slide-active');
        var curDot = $('.dot-active');
        
        if (curSlide !== $('.slide-first')) {
            curSlide.fadeOut(1000).removeClass('slide-active'); 
            setTimeout(function() {
                $('.slide-first').fadeIn(1000).addClass('slide-active');
            }, 1000);
            
            curDot.removeClass('dot-active');
            $('.d1').addClass('dot-active');
        }
     });
    
    // Складывающееся меню
    
    $('.logo').click(function() {
        $('.hb').animate({opacity: '0.5'});
        $('.hb').animate({opacity: '1'});
        $('.button').slideToggle();
        
    });
    
};
$(document).ready(main);