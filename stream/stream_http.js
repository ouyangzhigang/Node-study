const http = require('http')
const fs = require('fs')
const path = require('path')

// post
// const server = http.createServer((req, res) => {
//   const { method } = req
//   if (method === 'POST') {
//     req.on('data', (chunk) => {
//       console.log('chunk', chunk.toString())
//     })

//     req.on('end', () => {
//       res.end('end')
//     })
//   }
// })

// stream post
// const server = http.createServer((req, res) => {
//   const { method } = req
//   if (method === 'POST') {
//     req.pipe(res)
//   }
// })

// stream post pip
const server = http.createServer((req, res) => {
  const { method } = req
  if (method === 'POST') {
    const file = path.resolve(__dirname, './file.txt')
    const stream = fs.createWriteStream(file, {encoding: 'utf8'})
    req.pipe(stream)

    req.on('end', () => {
      res.end('write end')
    })
  } else {
    const file = path.resolve(__dirname, './data.json')
    const stream = fs.createReadStream(file, {encoding: 'utf-8'})
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    stream.pipe(res)
  }
})

server.listen(3333, () => {
  console.log('server is runing at http://127.0.0.1:3333')
})
