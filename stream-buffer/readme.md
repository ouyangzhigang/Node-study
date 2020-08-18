### stream and buffer

>>> 每个人的生命都是一只小船，理想是小船的风帆        ————张海迪


#### context

* 二进制介绍

* nodejs如何表示二进制

* stream中“流动”的二进制数据

* 使用Buffer对性能的提升

#### note

* 二进制比其他格式数据运行要效率很多，因为计算机底层正式通过二进制来实现，也是二进制数据能够通用化的原因

* nodejs中IO操作都是以二进制数据来进行流转的， `data.toString()`   `Buffer.from(string, 'utf-8')`    


#### express

```js
const str = 'Vue.js is a framework for building client-side applications. By default, Vue components produce and manipulate DOM in the browser as output. However, it is also possible to render the same components into HTML strings on the server, send them directly to the browser, and finally "hydrate" the static markup into a fully interactive app on the client.'

const buf = Buffer.from(str, 'utf-8')
buf
buf.toString()

// <Buffer e7 ba af 20 4a 61 76 61 53 63 72 69 70 74 20 e5 af b9 20 55 6e 69 63 6f 64 65 20 e5 8f 8b e5 a5 bd e4 bd 86 e6 98 af e6 97 a0 e6 b3 95 e5 be 88 e5 a5 ... 590 more bytes>
/* 纯 JavaScript 对 Unicode 友好但是无法很好地处理二进制数据。当我们面对类似 TCP 流或文件系统时，是需要处理八位流的。Node
有几种操作、创建以及消费八位流的策略。原始数据保存在 Buffer 类的实例中。一个 Buffer 实例类似于一个整数数组，但对应着 V8 堆之外的一个原始内存分配区域。一个 Buffer 的大小不可变。Buffer 类是一个全局的类，是一个比较罕见的不需要 require('buffer') 就可以使用的类。在Buffers和JavaScript string转换时，需要明确的一个编码方法。下面是一些不同的string编码。 */
```


#### reference

https://www.cnblogs.com/xiaopen/p/5300302.html