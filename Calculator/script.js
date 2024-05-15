const display=document.getElementById("display")
function append(input){

    display.value+=input;

}

function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="ERROR";
    }
}
function disclear(){
    display.value= "";

}
function fact(){
    var f=1;
    var input=Number(display.value)
    if(input<1)
     return false;
    else
    for(var i=1;i<=input;i++){
      f=f*i;
    }
    display.value=f;
    return false;
}
function pow(){
    var input=Number(display.value)
   display.value= Math.pow(input,input)
}
function sqr(){
    var input=Number(display.value)
   display.value= Math.pow(input,2)
}
function sqr3(){
    var input=Number(display.value)
   display.value= Math.pow(input,3)
}

function sqrt(){
    var input=Number(display.value)
   display.value= Math.sqrt(input)
 
}
function round(){
    var input=Number(display.value)
   display.value= Math.round(input)
 
}



