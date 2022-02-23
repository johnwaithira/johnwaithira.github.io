 /*  * scroll btn js *   */
 var sb, sbd, dbs,i, cY, a,b,c,d,e;
 sb = document.querySelector("#scroll-btn");
 sbd = sb.style;sbd.display = "none";
 dbs = document.body.scrollTop;sb.onclick = () =>{
 dbs = 0;document.documentElement.scrollTop = 0;}
 window.onscroll = () =>{
 if(dbs > 40 || document.documentElement.scrollTop > 40)
 {sbd.display = "block";}else{sbd.display = "none";}}
 /*  * scroll btn js end *   */

 /* Nav Links Click */
 var x = document.querySelectorAll("#a");
 for(i = 0; i < x.length; i++){
      x[i].onclick = () =>{
         document.getElementById("humberger").click();
     }
 }
 /* Nav Links Click END */

 /* currentYear */
 cY = document.getElementById("currentYear");
 cY.innerHTML = new Date().getFullYear();


 function getFile(filename)
 {a = document.getElementsByTagName("*");
 for(b = 0; b < a.length; b++){
 c = a[b]; d = c.getAttribute(filename);
 if(d){e = new XMLHttpRequest();
 e.onreadystatechange = function(){
 if(this.readyState === 4){
 if(this.status === 200){
 c.innerHTML = this.responseText;}
 c.removeAttribute(filename);
 getFile(filename);}}
 e.open("GET",d, true);e.send();
 return;}}}


 