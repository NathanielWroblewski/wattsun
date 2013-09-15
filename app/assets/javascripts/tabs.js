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

  $('.tab2').on('click', function(){
    setTimeout(function(){
      setTimeout(function(){
        setTimeout(function(){
        }, 1500);
      }, 1000)
    }, 500);
  });

  $('.tab3').on('click', function(){
    $('.right').find('h1').addClass('animated pulse');
    $('.right').find('h3').addClass('animated pulse');
    $('.right').find('img').addClass('animated pulse');
  });

});
