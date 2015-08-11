$(function(){
    console.log('✌(´ʘ‿ʘ｀)✌');
    var $accordion = $('#js-accordion'),
        $menu_button = $(".menu-button");

    $menu_button.on('click',function(){
        $accordion.toggleClass('is-open');
    });
});