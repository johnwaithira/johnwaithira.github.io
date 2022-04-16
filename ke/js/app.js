function preventreload()
{
    if(window.history.replaceState)
    {
        window.history.replaceState(null, null, window.location.href)
    }
}

function responsive()
{
 if(window.innerWidth > 980)
 { 
     window.onscroll = ()=>{
         var sb, sbd, dbs,i, cY, a,b,c,d,e;
         sb = document.querySelector("#scroll-btn");
         sbd = sb.style;sbd.display = "none";
         dbs = document.body.scrollTop;sb.onclick = () =>{
         dbs = 0;document.documentElement.scrollTop = 0;}
         if(dbs > 40 || document.documentElement.scrollTop > 40)
         {sbd.display = "block";}else{sbd.display = "none";}
         var sticker = document.querySelector(".stick");
         var product = document.querySelector(".stickproduct");
         var after = document.querySelector(".after");
     

         if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 && (document.documentElement.scrollTop ) < product.clientHeight - 400)
         {
             sticker.classList.add("custom_one");
             product.classList.add("custom_two");
             after.style.display = "none";
         }else{
             sticker.classList.remove("custom_one");
             product.classList.remove("custom_two");
             after.style.display = "block";


         }
 
     }
 }

}

