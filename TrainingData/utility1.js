
var counter= function(arr){
    return "There are "+arr.length+" elements in the array";
}

var adder= function(a,b){
    return `The sum is ${a+b}`;
}

var subtracter= function(a,b){
    return `The difference is ${a-b}`;
}

var pi=3.142

//This works
exports.subtract=subtracter;

//This doesn't work
exports=subtracter;

//This works
module.exports=counter

module.exports={
    count:counter,
    add:adder,
    pi:pi
};


