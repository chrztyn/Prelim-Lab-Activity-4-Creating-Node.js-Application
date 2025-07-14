var http = require('http');

const rootpage = require('./root.js');
const aboutpage = require('./about.js');
const contactpage = require('./contact.js');

var server = http.createServer(function (req, res){
    
    const name = "John Smith";
    res.writeHead(200, {'Content-Type': 'text/html'});

    if (req.url == '/') {
        res.end(rootpage(name))
    }
    else if (req.url == "/about"){
       res.end(aboutpage(name))
    }
    else if (req.url == "/contact"){
        res.end(contactpage(name))
    }
    else if (req.url == "/gallery"){
        res.end('<h1>This is the Gallery Page</h1>');
    }
    else 
        res.end('<h1>Invalid Request!</h1>');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')


/*      
Name: Christine Mae D. Yunun
Section: WD302
Date: 07/14/25
Activty: Prelim Lab Activity 4: Creating Node.js Application
*/

