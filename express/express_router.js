let express = require('express');
let app = express();
let router = express.Router();
const ejs = require('ejs');

app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.get('/', function (req, res) {
	console.log('主页 get 请求');
	res.send('hello get!');
});// hello get!

app.post('/', function (req, res) {
	console.log('主页 POST 请求');
	res.send('hello post!');
});// hello post!


app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  res.send('secret');	
  next(); // pass control to the next handler
});


app.delete('/del_user', function (req, res) {
	console.log('/del_user 响应删除请求');
	res.send('hello delete');
});// hello delete


app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

// let yehooTemplate = require('html!./template.html');
app.get('/list_user', function (req, res) {
	console.log('/list_user get 请求');
	// res.reader(yehooTemplate);
	res.send('fioejqofjewjfpewjqp');
});// 用户列表界面


app.get('/ab*cd', function (req, res) {
	console.log('/ab*cd post 请求');
	res.send('正则匹配要素');
});// 正则匹配要素

// 匹配 acd 和 abcd
app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

// 匹配 abcd、abbcd、abbbcd等
app.get('/ab+cd', function(req, res) {
  res.send('ab+cd');
});

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
app.get('/ab*cd', function(req, res) {
  res.send('ab*cd');
});

// 匹配 /abe 和 /abcde
app.get('/ab(cd)?e', function(req, res) {
 res.send('ab(cd)?e');
});

// app.get(/a/, function(req, res) {
//   res.send('/a/');
// });


// 匹配 /random.text 路径的请求
app.get('/random.text', function (req, res) {
  res.send('random.text');
});


// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', function(req, res) {
  res.send('Birds home page');
});
router.get('/ra', function(req, res) {
   res.send('ra')	
})
module.exports = router;


// 混合函数路径
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}	

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  const template = '<h1 style="color: red;">Hello from D!</h1>';		
  res.send(template);
});

app.listen(8080, function () {
	let host = this.address().address;
	let port = this.address().port;
	console.log('应用实例，访问地址为: http://%s:%s', host, port)
});









