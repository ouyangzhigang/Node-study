const url = require('url');
let obj = url.format({
	protocol: 'http:',
	slashes: true,
	auth: null,
	host: 'www.imooc.com',
	port: null,
	hostname: 'www.imooc.com',
	hash: '#hash',
	search: '?username=cc&pwd=21212121',
	query: 'username=cc&pwd=21212121',
	pathname: '/video/6710:3000',
	path: '/video/6710:3000',
	href: 'http://www.imooc.com/video/6710:3000?username=cc&pwd=21212121#hash'
});

console.log(obj);