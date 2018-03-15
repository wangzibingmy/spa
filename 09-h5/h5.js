var w=document.getElementById('w');
var h=document.getElementById('h');
var kk=document.getElementById('kk');
var gg=document.getElementById('gg');
var z=document.getElementById('z');
var m=document.getElementById('m');
var fsub=document.getElementById('fsub');
var btn=document.getElementById('btn');
var re=/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;

//var blnValid=false;
function roundFractional(x, n) {
   return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
w.onkeypress=function validateKey(e) {
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)  ) e.preventDefault();
}
h.onkeypress=function validateKey(e) {
        if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();                
 }
window.onload=function(){
      w.focus();       
}
fsub.onsubmit=function(e){
  e.preventDefault();
  if(re.test(h.value)&&re.test(w.value)){
    z.value=roundFractional((w.value)*2+(h.value)*2,1);
    m.value=roundFractional((w.value*h.value),2);
  }
}
