const fs = require('fs');
const path = require('path');
const memeye = require('memeye');
const log = console.log;

memeye();

// nodejs 读取文件
const file = path.resolve(__dirname, './file.txt');

fs.readFile(file, (err, res) => {
  if (err) {
    return console.log(err.message);
  } else {
    console.log(res.toString());
  }
});

// nodejs 写入文件
const writeFile = path.resolve(__dirname, './write.txt');
const data = `What exactly are streams?
Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.
However, streams are not only about working with big data. They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.`

fs.writeFile(writeFile, data, 'utf8', (err) => {
  if (err) throw err;
  log('write end');
});

/**
 * nodejs stream 读取与写入文件
 * createReadStream
 * createWriteStream
 */
const fileStream = path.resolve(__dirname, './stream.txt');
const readStream = fs.createReadStream(file);
const writeStream = fs.createWriteStream(fileStream);

readStream.pipe(writeStream);
readStream.on('end', () => log('complete'));

