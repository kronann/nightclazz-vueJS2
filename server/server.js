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
  let index = beers.findIndex((b) => b.label === req.body.label);
  let beer = req.body;
  beer.stock--;
  beers[index] = beer;

  res.status(201).send(beer);
});

router.post('/basket/confirm', (req, res) => {
  basket = [];
  res.status(200);
});

app.use(context, router);

app.listen(conf.port, () => {
  console.log('Express server listening on port ', conf.port);
});
