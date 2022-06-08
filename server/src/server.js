const express = require("express");
const routes = require('./routes');

require('./database');

const app = express();
app.use(express.json());
app.use(routes);
//app.use(errors()); 

app.listen(3000, () => {
  console.log('Server started!');
});