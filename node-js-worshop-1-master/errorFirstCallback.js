var fs = require("fs");

// console.log("Reading a file");
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("Program Ended");

console.log("Reading a file");

fs.readFile('input.txt',function(err,res){
    if(err){
        return console.log(err);
    }
    return console.log(res.toString());
});

console.log("Program Ended");

