const { log } = require('console');
const fs = require('fs');

// Callback

fs.readFile('data.json', 'utf-8', (error, data) => {
    if (error) return;
    console.log("Readed file data :" + data);
    console.log("Successfully Read the file data");
});
