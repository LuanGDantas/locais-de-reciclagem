const express = require("express");
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
//app.use(errors()); 

app.listen(3001, () => {
  console.log('Server started!');
});