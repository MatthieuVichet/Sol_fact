// app.js is the entry point of the application. It is responsible for starting the server and loading the routes.

const express = require('express');
const app = express();
const { router, authenticate } = require('./routes/auth');

// Parse the request body as JSON
app.use(express.json());

// authentication middleware
app.use('/login', router);

app.use('/auth', authenticate, (req, res) => {
	res.send('logged in');
});

// Mount the user routes
app.use('/user', require('./routes/user'));

// Mount the bank routes
app.use('/bank', require('./routes/bank'));

// Mount the document routes
app.use('/document', require('./routes/document'));

// hello world
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
