const express    = require('express');
const bodyParser = require('body-parser');
 
const app = express();

app.use(bodyParser.json());
 
app.get('/', (request, response) => {
    response.send('Hello world!');
});
 
app.listen(5000);