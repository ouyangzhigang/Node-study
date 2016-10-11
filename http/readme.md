readme.md
# http


## callback
`Nodejs is callback data` 

## sync
* 异步

```
	程序开始执行

	readme.md

	＃ http


	＃＃ callback

	｀Nodejs is callback data｀
```


* 阻塞式

```
	程序开始执行

	null

	readme.md

	＃ http



	＃＃ callback

	｀Nodejs is callback data｀
```	


## event

* addEventListener *

    addEventListener中的第三个参 数是useCapture, 一个bool类型。当为false时为冒泡获取(由里向外)，true为capture方式(由外向里)。


## content




```
	true

	undefined

	worlds { word: undefined, f: [Function] }
```


## scope
```
	that is a global variable

	this is a location variable

	this is change variable

	this is inner variable
```		

## call_apply

```
	➜  http git:(master) ✗ node call_apply.js

	...this is az a1! a21String

	undefinedthis is az a1! addString

	➜  http git:(master) ✗ node call_apply.js

	b1Stringthis is az a1! addString

	express call_apply_extend log
```



