const cors = require('cors');
const express = require('express');

const usersRouters = require('./routes/users.routers');
const repairsRouters = require('./routes/repairs.routers');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  const time = new Date().toISOString();
  req.requestTime = time;
  next();
});

app.use('/app/v1/users', usersRouters);
app.use('/app/v1/repairs', repairsRouters);

module.exports = app;
