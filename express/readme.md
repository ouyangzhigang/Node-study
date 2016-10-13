readme.md

# express

	`$ npm install express --save`

api: http://www.expressjs.com.cn/


## propertires

1. *可以设置中间件来响应请求*

2. *定义了路由表用于执行不同的HTTP请求动作*

3. _可以通过向模板传递参数来动态渲染HTML页面_



## 中间件

1. body-parse.js     - node.js中间件，用于处理JSON, Raw, Text, 和 URL编码的数据

2. cookie-parse      - 解析cookie工具，通过req.cookies可以取到传过来的cookie，并转换为对象

3. multer            - node.js 中间件，用于处理enctype = "multiple/form-data"


```
	npm install body-parse --save
	npm install cookie-parse --save
	npm install multer --save

```

## 请求和响应
### req  res

**reqeust**  表示HTTP请求，包含了请求查询字符串，参数，内容，HTTP头部等属性。

__response__ 表示HTTP响应，即在接收请求时向客户端发送的HTTP响应数据


```
	app.get('/', function (req, res) {
		// __
	})

```	


## 路由

Express 定义了如下和 HTTP 请求对应的路由方法： 

get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect。

__post/get__

```
	app.get('/list_user', function (req, res) {
		console.log('/list_user get 请求');
		res.send('用户列表界面');
	});// 用户列表界面

	app.get('/ab*cd', function (req, res) {
		console.log('/ab*cd post 请求');
		res.send('正则匹配要素');
	});// 正则匹配要素

```

__app.all()__ 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。

在下面的例子中，来自 “/secret” 的请求，不管使用 GET、POST、PUT、DELETE 或其他任何 http 模块支持的 HTTP 请求，句柄都会得到执行。



## Express使用html模板

这还是个谜



## 静态资源

通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。

将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：

	app.use(express.static('public'));


	现在，public 目录下面的文件就可以访问了。

	http://localhost:3000/images/kitten.jpg
	http://localhost:3000/css/style.css
	http://localhost:3000/js/app.js
	http://localhost:3000/images/bg.png
	http://localhost:3000/hello.html
<br />
访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。

如果你希望所有通过 express.static 

访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：

	app.use('/static', express.static('public'));

现在，你就爱可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。

	http://localhost:3000/static/images/kitten.jpg
	http://localhost:3000/static/css/style.css
	http://localhost:3000/static/js/app.js
	http://localhost:3000/static/images/bg.png
	http://localhost:3000/static/hello.html


































