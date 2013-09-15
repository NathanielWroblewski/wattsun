$(document).ready(function(){
  $('.tab').on('click', function(){
    $('.tab').css('background-color', '#b63722');
    $(this).css('background-color', '#8B0000');
    $('.tab-page').addClass('hidden');
    $('.' + ($(this).data('tab'))).removeClass('hidden');
  });
});
