// Stream (use to handle large file)

const { error, log } = require('console');
const fs = require('fs');
const { buffer } = require('stream/consumers');

// without using pipe -----------------------------------------------------------------------------

//console.log('Start streaming file...');

// const readable = fs.createReadStream('./data/dataset.json', { encoding: 'utf-8' });
// const writable = fs.createWriteStream('./data/copy-1.json');

// readable.on('data', (chunk) => {
//     console.log('Received chunk', chunk.length, 'characters');
//     writable.write(chunk);
// });

// readable.on('end', () => {
//     console.log('Completed..');
//     writable.end();
// });

// writable.on('finish', () => { console.log("File copied......") });

// readable.on('error', (err) => console.error(err));


// with using pipe -----------------------------------------------------------------------------

// const readable = fs.createReadStream('./data/dataset.json', { encoding: 'utf-8' });
// const writable = fs.createWriteStream('./data/copy-1.json');

// readable.pipe(writable);

// writable.on('finish', () => { console.log("File copied......") });

// readable.on('error', (err) => console.error(err));




// Buffer (buffers is consist multiple binary sets)--------------------------------------------------

const bufferdata = Buffer.from("Yooooooo Buddy... - Light wight ...");
// Binary
console.log(bufferdata);
// String
console.log(bufferdata.toString());


