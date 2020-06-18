const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helper/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales')


app.set('view engine', 'hbs');

 app.get('/about', (req, res) => {

        res.render('about');
 })


 app.get('/', (req, res) => {
  //res.send('Bonjour monde')
  
    res.render( 'home', {
        nombre:'miguel'
    });

}) 
 
app.listen(port, () => {
    console.log(`Trabajando el puerto ${port}`);
})