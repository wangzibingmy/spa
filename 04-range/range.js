var age=document.getElementById('age');
var rg=document.getElementById('rg');
rg.onchange=function(){
    age.innerHTML=rg.value;
}
