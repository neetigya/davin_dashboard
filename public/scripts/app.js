/**************update navigation code starts************/

/*update navigation on resize, onload, maximize, minimize*/

function resizingNav() {
    // at1400();
    if ($(window).width() < 480) {
        $('#account-links').hide(100);
        $(' div.arrow-down').show(200);
        $('div#welcome-message p').first().prependTo('#page-top');
        $($("nav.secondary-nav a").get().reverse()).each(function(index) {
            $(this).detach().prependTo(".hidden-menu-s");
        })
        $("nav.secondary-nav").addClass('hidden');
        $(".ham-menu-s").removeClass('hidden');

        $("nav.MainNav a").each(function(index) {
            $(this).detach().appendTo(".hidden-menu-m");
        })
        $("nav.MainNav").addClass('hidden');
        $(".ham-menu-m").removeClass('hidden');
    }
    else {
        $('#page-top p').first().prependTo('#welcome-message');
        $("nav.secondary-nav").removeClass('hidden');
        $("nav.MainNav").removeClass('hidden');
        if ($(window).width() < 1024) {
            $('#account-links').hide(100);
            $(' div.arrow-down').show(200);
        }
        else {
            $(' div.arrow-down').hide('easing');
            $('#account-links').show('easing');
            if ($(window).width() > 1400) {
                $('.hidden-menu-s a').each(function(index) {
                    $(this).detach().appendTo("nav.secondary-nav");
                })
                $(".hidden-menu-s").addClass('hidden');
                $(".ham-menu-s").addClass('hidden');

                $($('.hidden-menu-m a').get().reverse()).each(function(index) {
                    $(this).detach().prependTo("nav.MainNav");
                })
                $(".hidden-menu-m").addClass('hidden');
                $(".ham-menu-m").addClass('hidden');
            }
        }
    }


}

$(window).on('load', function() {
    resizingNav();
    setOffset();
});

$(window).on('resize', function() {
    resizingNav()
    setOffset();
});
/*
function at1400() {
    if ($(window).width() > 1400) {
        $('.hidden-menu-s a').each(function(index) {
            $(this).detach().appendTo("nav.secondary-nav");
        })
        $(".hidden-menu-s").addClass('hidden');
        $(".ham-menu-s").addClass('hidden');

        $($('.hidden-menu-m a').get().reverse()).each(function(index) {
            $(this).detach().prependTo("nav.MainNav");
        })
        $(".hidden-menu-m").addClass('hidden');
        $(".ham-menu-m").addClass('hidden');
    }
}

function at1024(sec) {
    if ($(window).width() < 1024) {
        $('#account-links').hide(sec);
        $(' div.arrow-down').show('200');
    }
    else {
        $(' div.arrow-down').hide('easing');
        $('#account-links').show('easing');
    }
}

function at480() {
       if ($(window).width() < 480) {
           $('div#welcome-message p').first().prependTo('#page-top');
       }
       else {
           $('#page-top p').first().prependTo('#welcome-message');
       }
    if ($(window).width() < 480) {
        $($("nav.secondary-nav a").get().reverse()).each(function(index) {
            $(this).detach().prependTo(".hidden-menu-s");
        })
        $("nav.secondary-nav").addClass('hidden');
        $(".ham-menu-s").removeClass('hidden');

        $("nav.MainNav a").each(function(index) {
            $(this).detach().appendTo(".hidden-menu-m");
        })
        $("nav.MainNav").addClass('hidden');
        $(".ham-menu-m").removeClass('hidden');
    }
    else {
        $("nav.secondary-nav").removeClass('hidden');
        $("nav.MainNav").removeClass('hidden');
        updateNavigation();
        updateNavigationMain();
    }
}*/

$(' div.arrow-down').on('click', function() {
    $('#account-links').slideToggle('fast');
});



/*var resized;
var resizedMain;
var adjustHead;
$(window).on('resize orientationChanged', function() {
    clearTimeout(resized);
    clearTimeout(resizedMain);
    //clearTimeout(adjustHead);
    resized = setTimeout(updateNavigation, .5);
    resizedMain = setTimeout(updateNavigationMain, .5);
    //adjustHead = setTimeout(adjustHeader, .5);
});*/

$(function() {
    var timer_id;
    $(window).resize(function(event) {
        event.preventDefault();
        clearTimeout(timer_id);
        timer_id = setTimeout(function() {
            updateNavigation();
            updateNavigationMain();
            resizingNav();
        }, 10);
    });
});



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
    // console.log("available: " + availableSpaceSecondary + " visbleLinks: " + visibleLinksWidth);
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
    // console.log($(".hidden-menu-s a").length)
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
    //console.log("availableM: " + availableSpaceMain + " visbleLinks: " + visibleLinksWidthMain);
    if (visibleLinksWidthMain > availableSpaceMain) {
        $("nav.MainNav").children().first().appendTo('div.hidden-menu-m');
        $(".ham-menu-m").removeClass('hidden');
    }
    else {
        $("div.hidden-menu-m").children().last().prependTo("nav.MainNav")
    }

    if ($('.hidden-menu-m a').length <= 0) {
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
/*****************update navigation code ends**************/


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


/*toggle hidden-menu on click on ham-menu*/
$(".ham-menu-m").on('click', function(event) {
    $(".hidden-menu-m").slideToggle(200, function() {
        $(".hidden-menu-m").toggleClass('hidden');
    });
});
$(".ham-menu-s").on('click', function(event) {
    $(".hidden-menu-s").slideToggle(200, function() {
        $(".hidden-menu-s").toggleClass('hidden');
    });
});


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

/*click event on anywhere on the body to check and close the opened drop down list*/
$('body').on('click', function(e) {

    if ($(e.target).closest('div.ham-menu-m').length === 0) {
        if ($(e.target).closest('div.hidden-menu-m').length === 0) {
            $("div.hidden-menu-m").slideUp('fast');
            $("div.hidden-menu-m").addClass('hidden');
        }
    }
    if ($(e.target).closest('.ham-menu-s').length === 0) {
        if ($(e.target).closest('.hidden-menu-s').length === 0) {
            $("div.hidden-menu-s").slideUp('fast');
            $(".hidden-menu-s").addClass('hidden');
        }
    }
    if ($('.arrow-down').css('display') !== 'none') {
        if ($(e.target).closest('.arrow-down').length === 0) {
            if ($(e.target).closest('#account-links').length === 0) {
                $("#account-links").slideUp('fast');
                $("#account-links").addClass('hidden');
            }
        }
    }

});


$(window).on('scroll', function() {

    var scrolled = $('body').scrollTop();
    
    if ((scrolled) > 300) {
        // console.log(scrolled);
     
        $('#header-logo').slideUp('easing');
        $('#welcome-message').slideUp('easing');
        $('#header-account-info').slideUp('easing');
           setOffset();
        //, function(){
            //$(this).hide();
            //})
    }
    else {
       
        $('#header-logo').show();
         $('#welcome-message').slideDown('easing');
        $('#header-account-info').slideDown('easing');
         setOffset();
    }
})

$('#sideNavButton').on('click', function(e){
            e.preventDefault();
        $('#sideNavButton').css({width:0, padding:0, fontSize:0});
        $("#sideNavContent").css({width:200});
});
$('#closeSideNav').on('click', function(){
     $("#sideNavContent").css({width:0});
        $('#sideNavButton').css({width:100, padding:25, fontSize:18});
       
});

function setOffset(){
var a  = $('.navigation-main').offset().top 
var b = $('.navigation-main').innerHeight() ;
var c = $(window).scrollTop();
var d = a+b-c
console.log("a : "+ a + " b : " + b + " c : " + c + " d : " +d )

$('#sideNav').css({top: d });
}
var objSide = {
    content1: 'graph1',
    content2: 'graph2',
    content3: 'graph3',
    content4: 'graph4',
    content5: 'graph5',
    content6: 'graph6',
    content7: 'graph7'
};

$('#sideNavContent a').on('click', function() {
    var idOfSideNav = objSide[$(this).attr('id')];
    
    console.log($('#' + idOfSideNav).offset())
})



$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
