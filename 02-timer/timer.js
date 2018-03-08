var d=document.getElementById('d');
var i=5;
window.onload=function(){
    var time=setInterval(function(){
    d.value='同意'+'('+ i-- +')';
    if(i<=0){
      d.removeAttribute('disabled');
      clearInterval(time);
      d.value='同意';
      d.onmouseover=function(){
        this.style.backgroundColor="lightblue";
                                                          
      }
      d.onmouseout=function(){
        this.style.backgroundColor="";
      }
      d.onclick=function(){
        alert('哈哈哈哈哈');
      }
    }
    },1000);    
      
  }
