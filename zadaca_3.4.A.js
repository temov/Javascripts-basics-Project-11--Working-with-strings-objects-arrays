
var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var AM_PM = "";
   if (hour < 12) {
      AM_PM = "AM";
   } else {
      AM_PM = "PM";
   } if (hour == 0) {
      hour = 12;
   }
    if (hour > 12) {
      hour = hour - 12;
   }
   console.log(hour + ":" + minute + "" + AM_PM);