function colorToHex(color)
{
    var hexa = color.toString(16);
    return hexa.length == 1 ? "0" + hexa : hexa;
}

function toHexa(red, green, blue){
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}
 function tab(evt, tabname, tabbtn, tabcontent)
    {
            var tabbutton, tabcontent, i;
            tabcontent = document.getElementsByClassName(tabcontent)

            for(i = 0; i< tabcontent.length; i++)
            {
                tabcontent[i].style.display = "none"
            }
            tabbutton = document.getElementsByClassName(tabbtn)

            for(i = 0; i< tabbutton.length; i++)
            {
                tabbutton[i].className =  tabbutton[i].className.replace(" active", "")
            }

            document.getElementById(tabname).style.display = "block"
            evt.currentTarget.className += " active"
            
        }
