$(function(){
  initializePage();

  $('.js-sms').click(function(event) {
    var $this=$(this);
    if($this.hasClass('disabled')){
      return;
    }

    $this.addClass('disabled');
    var number=60;
    var c=setInterval(function(){
      if(number<0){
        clearInterval(c);
        $this.removeClass('disabled');
        $this.html('短信验证');
        return;
      }
      $this.html('还剩'+number+'秒');
      number--;
    }, 1000);
  });
  $('.bt-radio').each(function(index, el) {
    var $this=$(this);
    $this.click(function(event) {
      $this.parents('.radio-group').find('.bt-radio').removeClass('on');
      $(this).addClass('on');
      return false;
    });
  });
  $('.ui-tabs a').click(function(event) {
    $('.ui-tabs a').removeClass('on');
    $(this).addClass('on');
    return false;
  });
  $('.ui-commit >.a .star img').click(function(event) {
    $(this).prevAll('img').andSelf().attr('src', 'img/ico-stargt-on.png');
    $(this).nextAll('img').attr('src', 'img/ico-stargt.png');
  });
  $('.ui-droplist >.hd a').click(function(event) {
    var $this=$(this);
    var tarId=$this.data('list');
    $this.parents('.ui-droplist').find('.ct').not('#'+tarId).hide();
    $('#'+tarId).toggle();
    $this.parents('.ui-droplist').children('.hd').find('a').removeClass('on');
    $this.toggleClass('on');

    return false;
  });
  $('.ui-droplist .type1 a').click(function(event) {
    var $this=$(this);
    var tarId=$this.data('list');
    $this.parents('.ui-droplist').find('.type2').hide();
    $('#'+tarId).show();
    $this.parents('.ui-droplist').find('.type1 a').removeClass('on');
    $this.addClass('on');

    return false;
  });
  $('.number').each(function(index, el) {
    var $this=$(this);
    $this.find('a.more').click(function(event) {
      var val=$this.find('input').val();
      val++;
      $this.find('input').val(val);
      return false;
    });
    $this.find('a.less').click(function(event) {
      var val=$this.find('input').val();
      val--;
      if(val<0){
        val=0;
      }
      $this.find('input').val(val);
      return false;
    });
  });
  mui('.ui-shoplist-gp li').on('swipeleft', '.i', function(e){
    $(this).addClass('on');
  })
  mui('.ui-shoplist-gp li').on('swiperight', '.i', function(e){
    $(this).removeClass('on');
  });
  $('.ui-item-news .menu').click(function(event) {
    $(this).toggleClass('on');
  });
  $('.ui-papers .i >.cont .ct p a').click(function(event) {
    $(this).parents('.i').toggleClass('on');
    return false;
  });

});

/*---------------method---------------*/
//