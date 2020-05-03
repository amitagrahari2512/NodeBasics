var moment = require('moment');


var currentTime = new Date().getTime(); 
console.log(currentTime) 
      
        while (currentTime + 4500 >= new Date().getTime()) {

        }
currentTime = new Date().getTime(); 
console.log(currentTime)
const UNIQUE_ORDER_ID = Math.random().toString(32).substr(2);
console.log("UNIQUE_ORDER_ID :: "+UNIQUE_ORDER_ID)

var retdate = '2020-04-22T12:00:00+05:30';
var retdate1 = new Date(retdate)
var today = new Date();


retdate = moment(retdate).format('YYYY-MM-DD');
today = moment(today).format('YYYY-MM-DD');

console.log(retdate)
console.log(today)

if(retdate==today)
    console.log(true)
else
    console.log(false)


console.log(getDateIsToday(retdate)) ;

    function getDateIsToday(userInputDate) {
        var today = new Date();
        userInputDate = moment(userInputDate).format('YYYY-MM-DD');
        today = moment(today).format('YYYY-MM-DD');
        if(userInputDate==today)
            return true
        else
            return false
      }
