const express = require('express');
const bodyParser = require("body-parser");

const cors = require('./cors');
const conf = require('./server.json');

let beers = require(conf.beers);
let basket = [];

const app = express();
const context = '/api/v1';
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);

router.get('/beers', (req, res) => {
  res.send(beers);
});

router.get('/basket', (req, res) => {
  res.send(basket);
});

router.post('/basket', (req, res) => {
  basket.push(req.body);

  beers = beers.map(beer => {
    if (beer.label.toUpperCase() === req.body.label.toUpperCase()) {
      beer.stock--;
    }

    return beer;
  });

  res.status(201).send(req.body);
});

router.post('/basket/confirm', (req, res) => {
  basket = [];
  res.status(200);
});

app.use(context, router);

app.listen(conf.port, () => {
  console.log('Express server listening on port ', conf.port);
});
