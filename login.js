var move = function(event){
  $('img').attr('src','2.jpg');
  $('img').animate({left:"53.99%"},400);
  // $('img').css({'left':540+'px'})
  $('.heading').offset({top:150,left:500})
  $('.heading').html("Sign Up");
  $('.heading').css('font-size','40px');
  $('.bl').hide();
  $('.bl1').hide();
  $('.bl2').hide();
  $('.sub').hide();
  $('.dif').hide();
  $('h3').hide();
  $('.el').css('opacity','1.0');
  $('.elsub').css('opacity','1.0');
}
