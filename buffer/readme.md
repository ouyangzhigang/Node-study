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

写入node语法	

