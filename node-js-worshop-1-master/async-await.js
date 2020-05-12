const fs = require('fs').promises;

// async function loadMonoCounter() {
//     return fs.readFile("input.txt", 'binary');
//     console.log(data);
// }


// loadMonoCounter().then((data) => {
//     console.log(data);
// });

async function loadMonoCounter() {
    const data = await fs.readFile("input.txt", 'binary');
    //console.log(data);
    //return JSON.parse(data)
}

console.log(loadMonoCounter());
//loadMonoCounter();