var timerButton=function(config){

  var $btn=$('<input id="bing-timer-button" type="button">'),
  t=config.tlength,
  timer;
  disableBtn();
  $(config.container)
  $btn.click(function(){
    alert('Hello');
  })
  function enableBtn(){
    $btn.val(config.title);
    $btn.removeAttr('disabled');
  }
  function disableBtn(){
    btn.attr('disabled','disabled')
    .val(config.title +'(' + t + 's)');
    timer=window.setInterval(function(){
      t--;
      if(t===0){
        enableBtn();
        window.clearInterval();
        return;
      }
    },1000);
  }
}
