const fs = require('fs');
const path = require('path');
const readline = require('readline');
const memeye = require('memeye');
const log = console.log;

memeye();

const file = path.resolve(__dirname, './file.txt');
const stream = fs.createReadStream(file);
const rl = readline.createInterface({
  input: stream
})

rl.on('line', (line) => {
  log(line);
})

rl.on('close', () => {
  log('readline end');
})