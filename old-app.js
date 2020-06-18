
const http = require('http');



http.createServer( (req, res) => {

    res.writeHead(200, { 'content-type': 'Aplicación JSON'});


    let salida = {
        nombre: 'Miguel',
        edad  : '23',
        url: req.url
    }

    res.write( JSON.stringify( salida ) ) 
//    res.write('Bonjour monde')
    res.end();

})
.listen(8080);


console.log('Se desplegó');