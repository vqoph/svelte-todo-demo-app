const express = require('express');
const app = express();
const api = require('../api');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;

app.use(cors({ origin: true, credentials: true }));
app.use([
  bodyParser.json({ limit: '10mb', extended: false }),
  bodyParser.urlencoded({ extended: false }),
]);

app.use('/api', api);
app.listen(port, () =>
  console.log(`Mock server listening at http://localhost:${port}/api`)
);
