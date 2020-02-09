
console.log("User 1 made a request");
setTimeout(callback,5000);

console.log("User 2 made a request");
setTimeout(callback,5000);

console.log("User 3 made a request");
setTimeout(callback,5000);

function callback(){
    console.log("Database is queried and data returned");
}

