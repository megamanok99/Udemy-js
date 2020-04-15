$(document).ready(function(){
    $('li:contains("расписания туров"), .main_btna,.main_btn').on('click',function(){
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown();
    });
    
    $('.close').on('click',function(){
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp();
    });




});