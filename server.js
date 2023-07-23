const http = require('http');

const port = 5000

const server = http.createServer((req, res)=>{

	switch (req.url) {
		case '/':
			res.statusCode = 201
		res.setHeader('Content-Type', 'application/json')
		res.write("Welcome default page yabo el so7ab")
			break;

		case '/home':
			res.statusCode = 201
		res.setHeader('Content-Type', 'application/json')
		res.write("Welcome home yabo el so7ab")
			break;

			case '/about':
				res.statusCode = 201
			res.setHeader('Content-Type', 'application/json')
			res.write("Welcome about")
				break;

				case '/student':
				res.statusCode = 201
			res.setHeader('Content-Type', 'application/json')
			res.write("Welcome student")
				break;
	
		default:
			res.statusCode = 404
			res.setHeader('Content-Type', 'application/json')
			res.write("no page found")
			break;
	}
	

	

	res.end( )	
})


server.listen(port, ()=>{
	console.log(`server listening on port ${port}`);
})


