var h=document.getElementById('h');
var w=document.getElementById('w');
var pp=document.getElementById('pp');
var z=document.getElementById('z');
var m=document.getElementById('m');
var btn=document.getElementById('btn');
var re=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
btn.onclick=function(){
  if(w.value==""||h.value==""){     
    pp.innerHTML="请填写必要信息";
      z.value="";
      m.value="";
  }
  else if(!re.test(w.value)||!re.test(h.value)){
    pp.innerHTML="信息为正数格式";
  }
  else{
      z.value=(w.value)*2+(h.value)*2;
      m.value=w.value*h.value;
      pp.innerHTML="";  
  }
}         

