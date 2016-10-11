const querystring = require('querystring');

let stringify = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '', banana: null, json: {a: 'a'}});
console.log(stringify); 
// foo=bar&baz=qux&baz=quux&corge=&banana=&json=

let parse = querystring.parse('?foo=bar&baz=qux&baz=quux&corge=&banana=&json=31212#hash');
console.log(parse);
// { '?foo': 'bar',
//   baz: [ 'qux', 'quux' ],
//   corge: '',
//   banana: '',
//   json: '31212#hash' }

let parses = querystring.parse('w=%D6%D0%CE%C4&foo=bar'); 
console.log(parses); 
// { w: '中文', foo: 'bar' }

let escape = querystring.escape('w=欧阳志刚&foo=bar');
console.log(escape);
// w%3D%E6%AC%A7%E9%98%B3%E5%BF%97%E5%88%9A%26foo%3Dbar

let unescape = querystring.unescape('w=%D6%D0%CE%C4&foo=bar', null, null, {decodeURIComponent: 'non-utf8'});
console.log(unescape);
// w=中文&foo=bar
