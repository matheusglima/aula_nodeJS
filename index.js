const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false})); 
userRoutes(app);

app.get('/', (req, res) => {
    return res.send('Rodando express');
});
app.listen(port, () => console.log('API rodando na porta 3000'));

