
var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var AM_PM = (hour < 12)?"AM":"PM";
hour = (hour == 0)?12:hour; 
hour = (hour > 12)?(hour - 12):hour;
console.log(hour + ":" + minute + "" + AM_PM);

//nowMinutes = (nowMinutes < 10) ? "0" + nowMinutes : nowMinutes;