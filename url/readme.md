#url

This module has utilities for URL resolution and parsing. Call require('url') to use it.
```
	{ parse: [Function: urlParse],
	  resolve: [Function: urlResolve],
	  resolveObject: [Function: urlResolveObject],
	  format: [Function: urlFormat],
	  Url: [Function: Url] }
```	  

##parse
Parsed URL objects have some or all of the following fields, depending on whether or not they exist in the URL string. Any parts that are not in the URL string will not be in the parsed object. Examples are shown for the URL

* http://www.imooc.com/video/6710

```
	Url {
	  protocol: 'http:',
	  slashes: true,
	  auth: null, => user
	  host: 'www.imooc.com',
	  port: null, => 3000
	  hostname: 'www.imooc.com',
	  hash: null, => #
	  search: null, => ?
	  query: null, =>&
	  pathname: '/video/6710',
	  path: '/video/6710',
	  href: 'http://www.imooc.com/video/6710' }
```	

* http://www.imooc.com/video/6710:3000?username=cc&pwd=21212121#hash

```
	Url {
	  protocol: 'http:',
	  slashes: true,
	  auth: null,
	  host: 'www.imooc.com',
	  port: null,
	  hostname: 'www.imooc.com',
	  hash: '#hash?username=cc&pwd=21212121',
	  search: null,
	  query: null,
	  pathname: '/video/6710:3000',
	  path: '/video/6710:3000',
	  href: 'http://www.imooc.com/video/6710:3000#hash?username=cc&pwd=21212121' }
```


##resolve
Added in: v0.1.25

Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag. Examples:

```
	url.resolve('/one/two/three', 'four')         // '/one/two/four'
	url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
	url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
```

##format
Added in: v0.1.25
Take a parsed URL object, and return a formatted URL string.

	Here's how the formatting process works:

	href will be ignored.

	path will be ignored.

	protocol is treated the same with or without the trailing : (colon).

	The protocols http, https, ftp, gopher, file will be postfixed with :// (colon-slash-slash) as long as host/hostname are present.

	All other protocols mailto, xmpp, aim, sftp, foo, etc will be postfixed with : (colon).

	slashes set to true if the protocol requires :// (colon-slash-slash)

	Only needs to be set for protocols not previously listed as requiring slashes, such as mongodb://localhost:8000/, or if host/hostname are absent.

	auth will be used if present.

	hostname will only be used if host is absent.

	port will only be used if host is absent.

	host will be used in place of hostname and port.

	pathname is treated the same with or without the leading / (slash).

	query (object; see querystring) will only be used if search is absent.

	search will be used in place of query.

	It is treated the same with or without the leading ? (question mark).

	hash is treated the same with or without the leading # (pound sign, anchor).