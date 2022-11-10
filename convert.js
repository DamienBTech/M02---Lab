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

   //Converts Fahrenheit to Celcius
function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   let degreesFahrenheit = fahrenheit
   degreesCelsius = ((degreesFahrenheit - 32) * 5/9)
    return degreesCelsius
}
//Converts Celcius to Fahrenheit
function convertCtoF(degreesCelsius) {
   let degreesCelsius = celcius
   degreesFahrenheit = (degreesCelsius * 9/5 + 32) 
   return
}


//checks for input error, activates the conversion, outputs converstion
function clickHandler(){

var celsius = document.querySelector("#cInput")
var fahrenheit = document.querySelector("#fInput")
var errMsg = document.querySelector("#errorMessage")

if(celsius.value.length > 0){
   var celsiusValue = parsefloat(celsius.value)
   if (!isNaN(celsiusValue)){
      fahrenheit.value = convertCtoF(celsiusValue)
      errMsg.innerHTML = " "
   }
   else{
      errMsg.innerHTML = celsius.value + "is not a number"
   }

}
else if(fahrenheit.value.length > 0){
   var fahrenheitValue = parsefloat(fahrenheit.value)
   if (!isNaN(fahrenheitValue)){
      celcius.value = convertFtoC(farenheitValue)
      errMsg.innerHTML = " "
   }
   else{
      errMsg.innerHTML = fahrenheit.value + "is not a number"
   }

}
}

