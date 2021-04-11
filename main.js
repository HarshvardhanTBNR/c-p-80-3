function getparagraph1(){
var inputs= [];
for(var i=1; i <=6;i++)
{
    inputs.push(document.getElementById("paral_input_"+i).value)
    inputs.join(". ")
    document.getElementById("showparagraph1").innerHTML=inputs.join(". ")
}
}
function getparagraph2(){
    var inputs= [];
    for(var j=1; j <=6;j++)
    {
        inputs.push(document.getElementById("paral_input_box_"+j).value)
        inputs.join(". ")
        document.getElementById("showparagraph2").innerHTML=inputs.join(". ")
    }
    }