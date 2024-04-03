
const display = document.getElementById("display");


function appendToDisplay(input){
    display.value +=input;
}
function calculate(){
    try{
    display.value = eval(display.value);
    }catch(error){
        alert("Operação Invalida");
        display.value = "Error";
        console.log("TESTE");
        }
}
function clearDisplay(){
    
    display.value ="";
    
}
