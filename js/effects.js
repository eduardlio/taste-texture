$(document).ready(function(){
    $('html, body').animate({
        scrollTop: 0
    });
    var moving = false;
    var count = 0;
    var pages = ['intro', 'cat', 'chem', 'mouth','tt', 'step', 'exp'];
    $('.nextpage').click(()=>{
        if(count<=pages.length && !moving){
            moving = true;
            var cElem = pages[count];
            var nElem = pages[count+1];
            $('.'+cElem).fadeOut(500);
            $('.'+nElem).fadeIn(700);
            $('html, body').animate({
                    scrollTop: 0
            }, 1000);
            count++;
            moving = false;
        }
    });
    $('.prevpage').click(()=>{
        if(count>=0 && !moving){
            moving = true;
            var cElem = pages[count];
            var nElem = pages[count-1];
            $('.'+cElem).fadeOut(500);
            $('.'+nElem).fadeIn(700);
            $('html, body').animate({
                    scrollTop: 0
            }, 1000);
            count--;
            moving = false;
        }
    });
    // TODO: contents onclick, change count value
    // case switch statements

    // TODO: have a see all section
})
