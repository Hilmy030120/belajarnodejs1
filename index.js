const express = require('express');
const app = express();
const router = require('./app/router/router');
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(3000, () => {
  console.log('Hello world');
});
