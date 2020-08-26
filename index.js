// var time = 30
// var timer =setInterval(
//     function(){
//         time = time - 1
//         console.log('Hi this is sanat, this is a counter'+time);
//         if(time == 0){
//             clearInterval(timer)
//         }
//     },
// 1000);
// console.log(__dirname);
// console.log(__filename);
// var http = require('http');
var fs = require('fs');
var home1 = fs.createReadStream(__dirname + '/14-07-20.html','utf8');
var contact = fs.createReadStream(__dirname + '/form.html','utf8');
// var WRS = fs.createWriteStream(__dirname + '/ThisIsLove.txt','utf8');

// MRS.on('data', function(chunk){
//     console.log('new chank Received: ')
//     WRS.write(chunk);
// })

var http = require('http');
var server = http.createServer(function(req,res){
    
    // var doo = {
    //     name: 'Sanat',
    //     Job: 'Student',
    //     place: 'Jhalda'
    // };
    // res.end(JSON.stringify(doo));

    if(req.url === '/home' || req.url === '/' || req.url === ''){
        res.writeHead('200',{'Content-Type':'text/html'});
        home1.pipe(res)
    } else if(req.url == '/contact'){
        res.writeHead('200',{'Content-Type':'text/html'});
        contact.pipe(res)
    } else {
        res.writeHead('404',{'Content-Type':'text/html'});
        res.end(req.url);
    }
});
server.listen(3000, '127.0.0.1');
