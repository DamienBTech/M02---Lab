window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   var conButton = document.querySelector("#convertButton")
   conButton.addEventListener("click", clickHandler)
   
   var celcius = document.querySelector("#cInput")
   var fahrenheit = document.querySelector("#fInput")

   celcius.addEventListener("input", function(){
   clearBox(fahrenheit)

   })
   fahrenheit.addEventListener("input", function(){
   clearBox(celcius)

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
   //TODO: Complete the function
   let degreesCelsius = celcius
   degreesFahrenheit = (degreesCelsius * 9/5 + 32) 
   return
}


//checks for input error, activates the conversion, outputs converstion
function clickHandler(){

var celcius = document.querySelector("#cInput")
var fahrenheit = document.querySelector("#fInput")
var errMsg = document.querySelector("#errorMessage")

if(celcius.value.length > 0){
   var celciusValue = parsefloat(celcius.value)
   if (!isNaN(celciusValue)){
      fahrenheit.value = convertCtoF(celciusValue)
      errMsg.innerHTML = " "
   }
   else{
      errMsg.innerHTML = celcius.value + "is not a number"
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

