var h=document.getElementById('h');
var w=document.getElementById('w');
var pp=document.getElementById('pp');
var z=document.getElementById('z');
var m=document.getElementById('m');
var btn=document.getElementById('btn');
var re=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);          
}
w.onblur=function(){
      if(w.value==""){      
            kk.innerHTML="请填写必要信息";
            w.focus();
            z.value="";
            m.value="";
          }
      else if(!re.test(w.value)){
              kk.innerHTML="信息为正数格式";
              w.focus();    
      }
        
};
h.onblur=function(){
      if(h.value==""){      
            gg.innerHTML="请填写必要信息";
            h.focus();
            z.value="";
            m.value=""; 
          }
      else if(!re.test(h.value)){
              gg.innerHTML="信息为正数格式";
              h.focus();    
      }
        
};

btn.onclick=function(){
  if(w.value==""){      
          kk.innerHTML="请填写必要信息";
          z.value="";
          m.value="";
                          
  }else if(!re.test(w.value)){
          kk.innerHTML="信息为正数格式";
          z.value="";
          m.value="";
                          
  }else if(h.value==""){     
            gg.innerHTML="请填写必要信息";
            z.value="";
            m.value=""; 
  }else if(!re.test(h.value)){
              gg.innerHTML="信息为正数格式";
              z.value="";
              m.value="";
  }else{
              gg.innerHTML="";
              kk.innerHTML="";
              z.value=roundFractional((w.value)*2+(h.value)*2,1);
              m.value=roundFractional(w.value*h.value,2);                                  
  }
}
window.onload=function(){
  w.focus();
}
