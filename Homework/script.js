//обработчик события, не позволяющий скриптам выполняться до загрузки страницы
$(document).ready(function() {
//при клике на btna,btn, asheldure класс overlay медленно появляется на странице 
    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn('slow');
        //медленно появляется модальное окно
        $('.modal').slideDown('slow');
    });
//при клике на крестик все в обратном порядке
    $('.close').click(function() {
        $('.modal').slideUp('slow');
        $('.overlay').fadeOut('slow');
    });

});