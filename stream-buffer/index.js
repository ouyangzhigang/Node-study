const str = `纯 JavaScript 对 Unicode 友好但是无法很好地处理二进制数据。当我们面对类似 TCP 流或文件系统时，是需要处理八位流的。Node 有几种操作、创建以及消费八位流的策略。原始数据保存在 Buffer 类的实例中。一个 Buffer 实例类似于一个整数数组，但对应着 V8 堆之外的一个原始内存分配区域。一个 Buffer 的大小不可变。Buffer 类是一个全局的类，是一个比较罕见的不需要 require('buffer') 就可以使用的类。在Buffers和JavaScript string转换时，需要明确的一个编码方法。下面是一些不同的string编码。`;
const buf = Buffer.from(str, 'utf-8');

console.log(buf);
console.log(buf.toString());