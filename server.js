require('express')().all('*', function (a, b) {
	b.sendFile(__dirname + a.url);
})
.listen(8080, '127.0.0.1', function () {
	console.log('success!');
})