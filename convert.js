window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   //declares and listens for button
   var conButton = document.querySelector("#convertButton")
   conButton.addEventListener("click", clickHandler)
   //declare data values
   var celsius = document.querySelector("#cInput")
   var fahrenheit = document.querySelector("#fInput")
   //listens for input from the other box to call clearBox
   celsius.addEventListener("input", function(){
   clearBox(fahrenheit)
   })

   fahrenheit.addEventListener("input", function(){
   clearBox(celsius)
   })
}
//removes from the other box
function clearBox(textInput){
   textInput.value = ""
   }   

   //Converts Fahrenheit to Celsius
function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   degreesCelsius = ((degreesFahrenheit - 32) * 5/9)
   if(degreesFahrenheit < 32){
     document.querySelector("#weatherImage").src = "cold.png"
   }
   else{
     if(degreesFahrenheit >= 32 && degreesFahrenheit <= 50){
     document.querySelector("#weatherImage").src = "cool.png"
     }
     else{
       document.querySelector("#weatherImage").src = "warm.png"
     }
   }
     
   return degreesCelsius
   
}
//Converts Celsius to Fahrenheit
function convertCtoF(degreesCelsius) {
   degreesFahrenheit = (degreesCelsius * 9/5 + 32) 
   if(degreesFahrenheit < 32){
     document.querySelector("#weatherImage").src = "cold.png"
   }
   else{
     if(degreesFahrenheit >= 32 && degreesFahrenheit <= 50){
     document.querySelector("#weatherImage").src = "cool.png"
     }
     else{
       document.querySelector("#weatherImage").src = "warm.png"
     }
   }
   return degreesFahrenheit
   }


//checks for input error, activates the conversion, outputs converstion
function clickHandler(){

var celsius = document.querySelector("#cInput")
var fahrenheit = document.querySelector("#fInput")
var errMsg = document.querySelector("#errorMessage")

if(celsius.value.length > 0){
   var celsiusValue = parseFloat(celsius.value)
   if (!isNaN(celsiusValue)){
      fahrenheit.value = convertCtoF(celsiusValue)
      errMsg.innerHTML = " "
   }
   else{
      errMsg.innerHTML = celsius.value + " is not a number"
   }
  
}
else if(fahrenheit.value.length > 0){
   var fahrenheitValue = parseFloat(fahrenheit.value)
   if (!isNaN(fahrenheitValue)){
      celsius.value = convertFtoC(fahrenheitValue)
      errMsg.innerHTML = " "
   }
   else{
      errMsg.innerHTML = fahrenheit.value + " is not a number"
   }

}
}

