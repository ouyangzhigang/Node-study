readme.md
# Buffer

## 创建buffer类

Node Buffer 类可以通过多种方式来创建

-方法1

	var buf =  new Buffer(10);

-方法2

	var buf = new Buffer([10, 20, 30, 40, 50]);

-方法3	

	var buf = new Buffer('www.runoob.com', 'utf-8');

utf-8是默认的编码方式，此外同样支持以下编码： 
	
	"ascli"   "utf-8"  "utf16le"  "ucs2"  "base64"  "hex"


# 写入缓冲区

写入node缓冲区的语法如下所示
	
	buf.write(string[, offset[, length]][, encoding])

**参数**

	1. string － 写入缓冲区的字符串
	2. offset － 缓冲区开始写入的索引值，默认为0
	3. length － 写入的字符串字节数，默认值为buffer.length
	4. encoding - 使用的编码。默认为 'utf-8'


**返回值**

返回一个新的缓冲区，它和旧缓冲区指向同一块区内存，但是从索引start 到 end到位置剪切



# 返回值

返回实际写入的大小。如果buffer空间不足，则只会写入部分字符串

*实例*
	
	var buffer1 = new buffer('runoob');
	//剪切缓冲区
	var buffer2 = buffer1.slice(0, 2);
	console.log('buffer2 contact' + buffer2.toString());  // buffer2 content: ru


# 缓冲区长度

node缓冲区长度从计算语法如下所示
	
	buf.length;

 - 返回值 

 	返回buffer对象所占据的内存长度	

**实例**	

	var buffer = new buffer('www.runoob.com', 'utf-8');
	


	


