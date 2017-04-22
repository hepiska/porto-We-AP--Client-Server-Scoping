$('#home').click(function () {
  $('#home').addClass('is-active').siblings().removeClass('is-active');
  $('#home-button').css('display','').siblings().css('display','none');
  $('#the-text').html('this is home tab')
})

$('#skill').click(function () {
  $('#skill').addClass('is-active').siblings().removeClass('is-active');
  $('#skill-button').css('display','').siblings().css('display','none');
  $('#the-text').html('this ins skill tab')
})

$('#meals').click(function () {
  $('#meals').addClass('is-active').siblings().removeClass('is-active');
    $('#meals-button').css('display','').siblings().css('display','none');
    $('#the-text').html('this ins skill tab')
})
