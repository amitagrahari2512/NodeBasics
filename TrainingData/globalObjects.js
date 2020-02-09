// console.log("File path is " + __filename);
// console.log("Directory path is " + __dirname);

// // Process Properties
//  console.log("Version " + process.version);
//  console.log("Executable Path " + process.execPath);
//  console.log("Process id " + process.pid);
//  console.log("Environment info is " + JSON.stringify(process.env.ANT_HOME));

//  //Process provides functions
 
//   //Process
//  process.on('beforeExit', function(code) {   
//     console.log('Before exit', code);
//  });
//  process.on('exit', function(code) {
//    // Following code will never execute.
//    setTimeout(function() {
//       console.log("This will not run");
//    }, 0);
  
//    console.log('About to exit with code:', code);
// });

// console.log("Program Ended");


function printHello() {
    console.log( "Hello, World!");
 }
 
 // Set Timeout
 setTimeout(printHello, 2000);

  //Clear Interval
 var time=0;
 var timer = setInterval(function(){
	time=time+2;
	console.log(time+ ' seconds have passed');
	if(time>6){
		clearInterval(timer);
	
}}, 2000);

 
