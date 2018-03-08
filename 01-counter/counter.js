var h=document.getElementById('h');
var w=document.getElementById('w');
var pp=document.getElementById('pp');
var z=document.getElementById('z');
var m=document.getElementById('m');
var btn=document.getElementById('btn');
var re=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;

w.onblur=function(){
      if(w.value==""){      
            kk.innerHTML="请填写必要信息";
            z.value="";
            m.value="";
          }
      else if(!re.test(w.value)){
              kk.innerHTML="信息为正数格式";
                  
      }
        
};
h.onblur=function(){
      if(h.value==""){      
            gg.innerHTML="请填写必要信息";
            z.value="";
            m.value=""; 
          }
      else if(!re.test(h.value)){
              gg.innerHTML="信息为正数格式";
                  
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
              z.value=(w.value)*2+(h.value)*2;
              m.value=w.value*h.value;                                  
  }
}

