var pw=document.getElementById('pw');
var pic=document.getElementById('pic');
pic.onmouseover=function(){
    pic.src='eyeopen.png';
    pw.type="text";
              
}
pic.onmouseout=function(){
    pic.src='eyeclose.png';
    pw.type="password";
            
}
