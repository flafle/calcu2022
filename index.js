//CALCULADORA PROGRAMADA:
//tengo 3 funciones que cree en el HTML; display, clearDisplay y calcular.()
const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;

};

function clearDisplay(){
    display.value = "";

};

function calcular(){
    try{
        display.value = eval(display.value);

        }
    catch(error){
          display.value = "Error";
        }
  

};