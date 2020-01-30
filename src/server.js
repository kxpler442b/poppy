const express = require('express');
const hbs = require( 'express-handlebars');
const app = express();
const port = 3000;

console.log('Importing static files')
app.use(express.static(__dirname + '/../public'));

console.log('Setting up Handlebars renderer')
app.set('etag', false);
app.disable('x-powered-by');
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
	extname: 'hbs',
	layoutsDir: __dirname + '/../views/pages/'
}));

console.log('Configuring routes')
app.get('/', function (req, res, next) {
    res.render('dash', {layout: false});
});

// START

app.listen(port, () => console.log(`Poppy 0.0.1 listening on port ${port}`));