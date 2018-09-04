console.log("Hello")
function greeting(g){
	console.log(g)
}
greeting("Hello from Function")

const http = require("http");
const fs = require("fs")

const hostname = '127.0.0.1';
const port = '3000';

fs.readFile('index.html' , (err, html) => {
	if(err){
		throw err;
	}
	
const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	res.write(html);
	res.end("Hello World Server started")
});

server.listen(port, hostname, () => {
	console.log("Server started on port "+port);
})
})
