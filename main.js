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

fs.readFile('data-1.json', 'utf-8').then((data1) => {
    console.log("Read file one");
    return fs.readFile('data-2.json', 'utf-8').then((data2) => ({ data1, data2 }));
}).then(({ data1, data2 }) => {
    console.log("Read file two");
    return fs.readFile('data-3.json', 'utf-8').then((data3) => ({ data1, data2, data3 }));
}).then(({ data1, data2, data3 }) => {
    console.log("All Files Read!");
    console.log(data1, data2, data3);
}).catch((error) => {
    console.log(error);
});