var today = new Date();
var hour = today.getHours();
function Greeting() {
  if ( hour >= 6 && hour <= 10){
     console.log("Dobro utro")}
else if ( hour > 10 && hour<= 18){
    console.log("Dobar den");
 }
}
Greeting();