const { log } = require('console');

const fs = require('fs').promises;

// Callback--------------------------------------------------------------------

// fs.readFile('data.json', 'utf-8', (error, data) => {
//     if (error) return console.log(error);
//     console.log("Readed file data :" + data);
//     console.log("Successfully Read the file data");
// });



// Call back hell--------------------------------------------------------------
// console.log('Starting to reading files...');
// fs.readFile('data-1.json', 'utf-8', (err, data1) => {
//     if (err) return console.error('file 1 error', err);
//     fs.readFile('data-2.json', 'utf-8', (err, data2) => {
//         if (err) return console.error('file 2 error', err);

//         fs.readFile('data-3.json', 'utf-8', (err, data3) => {
//             if (err) return console.error('file 3 error', err);
//             console.log(data1, data2, data3);
//         })

//         console.log('All Files read successfully..');

//     })

// });


// Use promises to avoid the callback hell----------------------------------------

// fs.readFile('data-1.json', 'utf-8').then((data1) => {
//     console.log("Read file one");
//     return fs.readFile('data-2.json', 'utf-8').then((data2) => ({ data1, data2 }));
// }).then(({ data1, data2 }) => {
//     console.log("Read file two");
//     return fs.readFile('data-3.json', 'utf-8').then((data3) => ({ data1, data2, data3 }));
// }).then(({ data1, data2, data3 }) => {
//     console.log("All Files Read!");
//     console.log(data1, data2, data3);
// }).catch((error) => {
//     console.log(error);
// });


// Promises also a little bit complicated so as a solution we use ASYNC -AWAIT-------------


async function readFiles() {
    const data1 = await fs.readFile('data-1.json', 'utf-8');
    console.log("Read data file 1");

    const data2 = await fs.readFile('data-2.json', 'utf-8');
    console.log("Read data file 2");

    const data3 = await fs.readFile('data-2.json', 'utf-8');
    console.log("Read data file 3");

    console.log(data1, data2, data3);

    console.log("All files readed ...");

}

readFiles();