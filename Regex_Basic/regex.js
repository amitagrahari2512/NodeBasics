//var reg = "[ABC][1-6]";
//var reg = "[ABC]?[1-6]";
//([A-Z](\d{1,2}(?!\d)|100))
//var reg  = "[ABC][1-6]{1}";

//    /\b[A-Z]([0-9][0-9]?|100)\b/

var reg = /\b[ABC]([0-6])\b/;
var patt = new RegExp(reg);
var str = "A1";
var res = patt.test(str);
console.log("Regex : "+res)