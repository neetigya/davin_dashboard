var resized;
$(window).on('resize orientationChanged', function(){
clearTimeout(resized);
resized = setTimeout(updateNavigation, 100);
});

$(function() {
    var timer_id;
    $(window).resize(function(event) {
        event.preventDefault();
        clearTimeout(timer_id);
        timer_id = setTimeout(function() {
            updateNavigation();
        }, 100);
    });
});



$('#secondary-nav a').on('click', function(event) {
    event.preventDefault();
    $('#secondary-nav a').removeClass('change');
    $(this).addClass('change').attr('data-before1', '');
});

$('.MainNav a').on('click', function(event) {
    event.preventDefault();
    $('.MainNav a').removeClass('change2');
    $(this).addClass('change2').attr('data-before2', '');
});


/*
console.log($('#secondary-nav').width());
console.log($('#secondary-nav a').width());*/


/*

$( window ).on('resize', function(event) {
      //event.preventDefault();
  updateNavigation();
});
*/
/*@desc calculates the width of the children elements
 *@param parent
 *@return width in deciaml form
 */
function calculateChildrenWidth(parent) {
    var childrenWidth = 0;
    $(parent).children().each(function(eachChild) {
        childrenWidth += $(this).width();
    });
    return childrenWidth;
}

function updateNavigation(a) {
   
    var visibleLinksWidth = $('#secondary-nav').width();
    var availableSpace = $('.navigation').width() - 100;
    console.log("available: " + availableSpace + " visbleLinks: " + visibleLinksWidth);
    var hiddenLinks;
    if (visibleLinksWidth > availableSpace) {
        $("nav#secondary-nav").children().last().prependTo('div.hidden-menu');
        $(".ham-menu").removeClass('hidden');
       // $(".ham-menu").html('<div>' +  $('.hidden-menu a').length + '</div>')
       
        /*   hide('slow', function(){
               hiddenLinks = $(this).detach();
               $(hiddenLinks).
               });*/
        //visibleLinksWidth = visibleLinksWidth - aa.width();
    }
    else {
        $("div.hidden-menu").children().first().appendTo("nav#secondary-nav")
      
    }
    
    if($('.hidden-menu a').length <= 0){
         $(".ham-menu").addClass('hidden');
    }
    console.log($(".hidden-menu a").length)
    visibleLinksWidth = $('#secondary-nav').width();
    if (visibleLinksWidth > availableSpace) {
        updateNavigation();
    }
    
    
}

/*  if(visibleLinksWidth > availableSpace ){
      $("nav#secondary-nav").children().last().prependTo('div.hidden-menu');
  }   */




updateNavigation();

$(".ham-menu").on('click', function(event) {
    $(".hidden-menu").toggleClass('hidden');
});