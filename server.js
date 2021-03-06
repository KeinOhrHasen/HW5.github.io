const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", routes);

app.use((req, res, next) => {
    console.error('router not found');
    res.sendStatus(404);
})

app.listen(3000);