const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('Folder created...');
});

// Create and Write to file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World',
  (err) => {
    if (err) throw err;
    console.log('File Written to...');

    //  File Append
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      ' I Love Node.js',
      (err) => {
        if (err) throw err;
        console.log('File Written to...');
      }
    );
  }
);

//  This will overwrite the text Hello World
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  ' I love Node.js init',
  (err) => {
    if (err) throw err;
    console.log('File Written to...');
  }
);

//  Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename File
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  (err) => {
    if (err) throw err;
    console.log('File Renamed...');
  }
);
