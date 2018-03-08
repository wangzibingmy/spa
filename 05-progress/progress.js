var pg=document.getElementById('pg');
var start=document.getElementById('start');
var stop=document.getElementById('stop');
var reset=document.getElementById('reset');
var time=0;
var i=0;  
start.onclick=function(){
  if(pg.value!==0){
    time=window.setInterval(function(){
      pg.value+=1;
    },100);
    return;
  }
  time=window.setInterval(function(){
    pg.value=i++;
  },100);
}
stop.onclick=function(){
  window.clearInterval(time);
  time=0;
                  
}
reset.onclick=function(){
  pg.value=0;     
  i=0;          
}
