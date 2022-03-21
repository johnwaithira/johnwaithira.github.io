function colorToHex(color)
{
    var hexa = color.toString(16);
    return hexa.length == 1 ? "0" + hexa : hexa;
}

function toHexa(red, green, blue){
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}
