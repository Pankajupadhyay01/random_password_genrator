var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!#$%^&*()_+";
var pass=""; 
var data=document.querySelector("#pass");
for(var i= 0;i<16;i++) {
    var len = upper.length;
    var p=Math.random()*len;
    pass += upper.charAt(p); 
}  
window.onload = function what(){
    document.getElementById('pass').innerHTML = pass;
   	
    };
  