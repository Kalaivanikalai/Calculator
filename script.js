let outputval = document.getElementById("getvalue");
function display(numb){
    outputval.value += numb;
}
function calculate_val(){
    try{
        outputval.value =eval(outputval.value);
    }
    catch(err){
        alert("You Have Entered Invalid Number!!");
    }
}
function clearval(){
    outputval.value = ""; 
}
function erase(){
    outputval.value = outputval.value.slice(0,-1);
}