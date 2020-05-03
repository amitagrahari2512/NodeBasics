
var moment = require('moment');


var date = new Date();
console.log(date)
console.log("Date : "+date)

var date1 = new Date()
console.log(date)
console.log(date.toISOString())
console.log(date.toString())
//

console.log("Convert utc date to local date....using timezone")

//Local Date
const localDate = "2020-04-23T12:00:00+05:30";
const utcDate = "2020-04-22T18:54:43.777Z";
//getting timezone
var timezone = localDate.substr(-6);
console.log(timezone);

const convertUtcToLocalDate = moment(utcDate).utcOffset(timezone).format('YYYY-MM-DD hh:mm:ss');
console.log("convertUtcToLocalDate :: "+convertUtcToLocalDate)


//const oldTime = "2020-04-24T18:54:43.777Z";
const oldTime = new Date();
while (oldTime.getTime() + 10000 >= new Date().getTime()) {
    //10 Sec difference Check
}
const currentTime = new Date();

var timeDiff = moment(currentTime).diff(moment(oldTime),'seconds')
console.log("Time Diff : "+timeDiff);





