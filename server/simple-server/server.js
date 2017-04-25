var http = require("http");            //提供web服务  
var url = require("url");            //解析GET请求  
var query = require("querystring");    //解析POST请求
var data = require('./data');
//服务
var server = function(request,response){
    //允许跨域
    //请求头为Credentials origin 不能为*
    response.setHeader('Access-Control-Allow-Origin', 'http://andy.facework.im');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Engaged-Auth-Token');
    //定义报文头
    response.writeHead(200,{"Content-Type":"text/json"});
    //判断是GET/POST请求
    if(request.method == "GET"){
        var params = [];
        params = url.parse(request.url,true).query;
        response.write(JSON.stringify(getData(params.id)));
        response.end();
    }else{
        var postdata = "";
        request.addListener("data",function(postchunk){
            postdata += postchunk;
        })

        //POST结束输出结果
        request.addListener("end",function(){
            var params = query.parse(postdata);
            params['fruit'] = compute(params);
            response.write(JSON.stringify(params));
            response.end();
        })
    }

};

var getData = function(id) {
    if (!id) return {code: 200, data: {rows: data.slice(0, 21)}};
    for (var i = 0; i < data.length; i++) {
        if (data[i]._id == id) {
            return {code: 200, data: {rows: data.slice(i, i + 21)}};
        }
    }
    return {code: 200, data: {rows: []}};
};

//计算
var compute = function(params){  
    switch(params['type']){
        case "add": return parseFloat(params['num']) + parseFloat(params['num1']);break;
        case "subtract": return parseFloat(params['num']) - parseFloat(params['num1']);break;
        case "multiplication": return parseFloat(params['num']) * parseFloat(params['num1']);break;
        case "division": return parseFloat(params['num']) / parseFloat(params['num1']);break;
    }
}


//开启服务在127.0.0.1:8080
http.createServer(server).listen(8080);  
console.log("Server start!");  