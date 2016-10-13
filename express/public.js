let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send('welcome coming express publick!')
})

app.listen(8080, function () {
	console.log('http://' + this.address().address.toString() + ':' + this.address().port.toString() + '/');
})





