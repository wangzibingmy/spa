var pg=document.getElementById('pg');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var time=0;
var max=pg.max;  
start.onclick=function(){
  if(time!==0){
  }else{
    time=setInterval(function(){
      if(pg.value==max){
      clearInterval(time);
      console('下载完成')；
      }
      pg.value++;
    },100);
  }
}
stop.onclick=function(){
  clearInterval(time);
  time=0;
                  
}
reset.onclick=function(){
  pg.value=0;               
}
