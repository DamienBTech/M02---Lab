window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   let conButton = document.querySelector("#convertButton")
   conButton.addEventListener("click", clickHandler)
   
   celcius = document.querySelector("#cInput")
   fahrenheit = document.querySelector("#fInput")

   celcius.addEventListener("input", function(){
   clearBox(fahrenheit)

   })
   fahrenheit.addEventListener("input", function(){
   clearBox(celcius)

   })


}

function clearBox(textInput){
   textInput.value = ""
   }
function convertCtoF(degreesCelsius) {
   //TODO: Complete the function
   
   return
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function

}

function clickHandler(){


}

