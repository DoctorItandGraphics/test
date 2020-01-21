const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


var app = express();
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index'))


app.get('/about', (req, res) => res.render('pages/about'))

app.get('/contact', (req, res) => res.render('pages/contact'))

app.get('/services', (req, res) => res.render('pages/services'))

app.listen(PORT, () => console.log(`Listening on ${PORT}`));





