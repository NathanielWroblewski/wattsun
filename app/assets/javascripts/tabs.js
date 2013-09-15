$(document).ready(function(){
  $('.tab1').css('background-color', '#8B0000');
  $('#versus').addClass('animated flipInY');
  $('.question-one').hide().fadeIn(3000);

  $('.tab').on('click', function(){
    $('.tab').css('background-color', '#b63722');
    $(this).css('background-color', '#8B0000');
    $('.tab-page').addClass('hidden');
    $('.' + ($(this).data('tab'))).removeClass('hidden');
  });

});
