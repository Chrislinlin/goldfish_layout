let http = require('http');
let server = http.createServer(handleRequest);
function handleRequest(req, res){
    console.log('resquest url: ', req.url);
    if (req.url ==='/'){
        res.writeHead(200, {'info':'index'})
        res.write('index');
        res.end();
        return;
    }
    if (req.url ==='/redirect'){
        res.writeHead(301,{
            'Loacation':'http://www.google.com'
        });
        res.end();
        return;
    }
    if (req.url ==='/catagory'){
        res.writeHead(200,{
            'info':'catagory'
        })
        re.write('catagory');
        res.end();
        return;
    }
    res.writeHead(404);
    res.end();
    return;

}
server.listen(5000);

