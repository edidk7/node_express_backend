const helmet = require('helmet');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compress = require('compression');

const { configs } = require('./configs');
const { getProducts, healthcheck } = require('./Routes/');

const app = express();

app.use(cors());
app.use(express.json());
app.use(compress())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: 'deny' }));

const { port, url } = configs;

app.use(`${url}`, healthcheck);
app.use(`${url}`, getProducts);


app.listen(port, () => {
  console.log(`app listening in port  ${port}`);
});
