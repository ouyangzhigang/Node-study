### node stream

`
  stream 主要试解决I/O操作的性能问题，也可以再http网络缓解服务器承载从而提升性能
`

>> node stream 表示一种基于nodejs I/O 流数据处理

#### 来源

* 交互式命令输入输出流

* http请求与相应

* nodejs进行文件读取/写入


#### 监听

- RPEC
```javascript
stdin.on('data', () => {})

stdin.on('end', () => {})

```

- http
```js
req.on('data', (chunk) => {})

req.on('end', () => { res.end(data) })
```

- I/O
```js
const stream = fs.createReadStream('./file.txt')

stream.pip(data)
stream.on('data', (chunk) => log(chunk.toString()))
stream.on('end', () => log('end'))
```

#### API

* createWriteStream

* createReadStream

* pip

* readline


### test

- memeye

  是一款检测nodejs内存使用情况的小工具, `eapUsed`表示nodejs使用了多少内存即堆内存


### note

  * stream对http和IO操作能起到性能提升，但对 “行” 却无能为力

  * 逐行读取的最佳方法就是`readline`



