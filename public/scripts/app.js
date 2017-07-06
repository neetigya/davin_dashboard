$('#secondary-nav a').on('click', function (event) {
    event.preventDefault();
    $('#secondary-nav a').removeClass('change');
    $(this).addClass('change').attr('data-before1','');
});

$('.MainNav a').on('click', function (event) {
    event.preventDefault();
    $('.MainNav a').removeClass('change2');
    $(this).addClass('change2').attr('data-before2','');
});



console.log($('.MainNav').width());