var today = new Date();
{
 console.log(today);   
}
var year = today.getFullYear();
{
 console.log(year);   
}
var month = today.getMonth();
{
 console.log(month);   
}
var hour = today.getHours();
{
 console.log(hour);   
}
var day = today.getDay();{
 console.log(day);   
}
var minute = today.getMinutes();{
 console.log(minute);   
}
var seconds = today.getSeconds();{
 console.log(seconds);   
}
var month = today.getMonth();
function monthName(){
var iminjanaMeseci = ["January","February", "March","April","May","June","July","August","September","October","November","December"];
    console.log(iminjanaMeseci[month]);
}
monthName();

function dayName(){
var iminjanaDenovi = ["Monday","Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"];
    {console.log(iminjanaDenovi[day-1]);
    }
}
dayName();
