var resized;
var resizedMain;
$(window).on('resize orientationChanged', function() {
    clearTimeout(resized);
    resized = setTimeout(updateNavigation, .5);
    resizedMain = setTimeout(updateNavigationMain, .5);
});

$(function() {
    var timer_id;
    $(window).resize(function(event) {
        event.preventDefault();
        clearTimeout(timer_id);
        timer_id = setTimeout(function() {
            updateNavigation();
            updateNavigationMain()
        }, 10);
    });
});


$(".ham-menu-m").on('click', function(event) {
    $(".hidden-menu-m").toggleClass('hidden');
});
$(".ham-menu-s").on('click', function(event) {
    $(".hidden-menu-s").toggleClass('hidden');
});
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

function updateNavigation() {
    var visibleLinksWidth = $('.secondary-nav').width();
    var availableSpaceSecondary;
    //secondary navigation
    if ($('.ham-menu-s').hasClass('hidden')) {
        availableSpaceSecondary = $('.navigation').width() - 100;
    }
    else {
        availableSpaceSecondary = $('.navigation').width() - $('.ham-menu-s').width() - 100;
    }
    if (availableSpaceSecondary < 0) {
        availableSpaceSecondary = 0;
    }
    if (visibleLinksWidth < 0) {
        visibleLinksWidth = 0;
    }
    console.log("available: " + availableSpaceSecondary + " visbleLinks: " + visibleLinksWidth);
    var hiddenLinks;
    if (visibleLinksWidth > availableSpaceSecondary) {
        $("nav.secondary-nav").children().last().prependTo('div.hidden-menu-s');
        $(".ham-menu-s").removeClass('hidden');
    }
    else {
        $("div.hidden-menu-s").children().first().appendTo("nav.secondary-nav")

    }

    if ($('.hidden-menu-s a').length <= 0) {
        $(".hidden-menu-s").addClass('hidden');
        $(".ham-menu-s").addClass('hidden');
    }
    console.log($(".hidden-menu-s a").length)
    visibleLinksWidth = $('.secondary-nav').width();
    if (availableSpaceSecondary < 0) {
        availableSpaceSecondary = 0;
    }
    if (visibleLinksWidth < 0) {
        visibleLinksWidth = 0;
    }
    if (visibleLinksWidth > availableSpaceSecondary) {
        updateNavigation();
    }
}

function updateNavigationMain() {
    var visibleLinksWidthMain = $('.MainNav').outerWidth();
    var availableSpaceMain;
    //main navigation
    if ($('.ham-menu-m').hasClass('hidden')) {
        availableSpaceMain = $('.navigation-main').width() - 100;
    }
    else {
        availableSpaceMain = $('.navigation-main').width() - $('.ham-menu-m').width() - 100;
    }
    if (availableSpaceMain < 0) {
        availableSpaceMain = 0;
    }
    if (visibleLinksWidthMain < 0) {
        visibleLinksWidthMain = 0;
    }

    console.log("availableM: " + availableSpaceMain + " visbleLinks: " + visibleLinksWidthMain);
    if (visibleLinksWidthMain > availableSpaceMain) {
        
        $("nav.MainNav").children().first().appendTo('div.hidden-menu-m');
        $(".ham-menu-m").removeClass('hidden');
    }
    else {
        $("div.hidden-menu-m").children().last().prependTo("nav.MainNav")
    }

    if ($('.hidden-menu-m a').length <= 0) {
        console.log($('.hidden-menu-m a').length);
        $(".hidden-menu-m").addClass('hidden');

        $(".ham-menu-m").addClass('hidden');
    }

    visibleLinksWidthMain = $('.MainNav').outerWidth();
    if (visibleLinksWidthMain < 0) {
        visibleLinksWidthMain = 0;
    }
    if (visibleLinksWidthMain > availableSpaceMain) {
        updateNavigationMain();
    }
}

updateNavigation();
updateNavigationMain();



/* adding class change to the clicked link*/
$('.secondary-nav a').on('click', function(event) {
    event.preventDefault();
    $('.secondary-nav a').removeClass('change');
    $('.hidden-menu-s a').removeClass('change');
    $(this).addClass('change').attr('data-before1', '');
});

$('.hidden-menu-s a').on('click', function(event) {
    event.preventDefault();
    $('.secondary-nav a').removeClass('change');
    $('.hidden-menu-s a').removeClass('change');
    $(this).addClass('change').attr('data-before1', '');
});

$('.MainNav a').on('click', function(event) {
    event.preventDefault();
    $('.MainNav a').removeClass('change2');
    $('.hidden-menu-m a').removeClass('change2');
    $(this).addClass('change2').attr('data-before2', '');
});

$('.hidden-menu-m a').on('click', function(event) {
    event.preventDefault();
     $('.MainNav a').removeClass('change2');
    $('.hidden-menu-m a').removeClass('change2');
    $(this).addClass('change2').attr('data-before2', '');
});

$('body').click(function(e) {
    if ($(e.target).closest('.ham-menu-m').length === 0) {
         if ($(e.target).closest('.hidden-menu-m').length === 0) {
            $(".hidden-menu-m").addClass('hidden');
        }
    }
    if ($(e.target).closest('.ham-menu-s').length === 0) {
        if ($(e.target).closest('.hidden-menu-s').length === 0) {
            $(".hidden-menu-s").addClass('hidden');
        }
    }

});

   
