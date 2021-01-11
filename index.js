const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.send('funcionando')
})


const routes = require('./routes')
app.use('/api', routes);

app.use(express.static(__dirname + '/client'))

const port =3001

app.listen(port, () => {
    console.log('Server Running in http://localhost', port)
})