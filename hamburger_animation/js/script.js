$(function () {
    var $animation = $('.icon-animation');

    $animation.on('click',function(){
       console.log('( ˇωˇ )');
        if ($(this).hasClass('is-open')){
            $(this).removeClass('is-open');
        } else {
            $(this).addClass('is-open');
        }
    });
});
