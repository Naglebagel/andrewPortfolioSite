const express = require('express');
const app = express();

const portfolioController = require('./controllers/portfolio');


// tell express where are view is
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// we can parse the body of a request 
// so that we can read req.body\

app.use(express.static('public'));


// use our controllers after body parser and static
// every route in the fruits controller starts 
// with /fruits now
// so now /fruits = /fruits/fruits

app.use('/', portfolioController)

app.listen(3000, () => {
	console.log('listening on port 3000')
});





