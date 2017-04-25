var http = require('http');
var query = require('querystring');
http.createServer(function (req, res) {
    var postData = '';
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Engaged-Auth-Token');
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        postData += chunk;
    });
    req.on('end', function () {
        var params = query.parse(postData);
        res.write(JSON.stringify(params));
        res.end();
    });
}).listen(3000);
console.log("服务启动。。。");
