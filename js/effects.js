$(document).ready(function(){
    $('html, body').animate({
        scrollTop: 0
    });
    
    var path = window.location.pathname;
    var page = path.split("/").pop();
    var moving = false;
    var count = 0;
    var pages = [
        ['terms', 'big-four', 'four-tastes', 'other-flavs', 'flav-beyond', 'experiments'],
        ['intro', 'cat', 'chem', 'mouth','tt', 'step', 'exp']
    ];
    var thisList = [];
    if(page=="part1.html"){
        thisList = pages[0];
    } else if(page=="part2.html"){
        thisList = pages[1];
    }
    
    $('.nextpage').click(()=>{
        if(count<=thisList.length && !moving){
            changePage(thisList, count+1);
        }
    });
    $('.prevpage').click(()=>{
        if(count>=0 && !moving){
            changePage(thisList, count-1);
        }
    });
    function changePage(arr, next){
        moving = true;
        var cElem = arr[count];
        var nElem = arr[next];
        $('#'+cElem).fadeOut(500);
        $('#'+nElem).fadeIn(700);
        $('html, body').animate({
                scrollTop: 0
        }, 1000);
        moving = false;
        count = next;
    }
    // TODO: contents onclick, change count value
    $("a").on("click", function(){
        var href = $(this).attr('href').substr(1);
        changePage(thisList, thisList.indexOf(href));
    });
    // case switch statements

    // TODO: have a see all section
})
