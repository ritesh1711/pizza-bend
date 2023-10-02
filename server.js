const express = require('express');

const db = require('./db');

const Pizza = require('./modals/pizzamodal'); 
const app = express();
const pizzaroutes = require('./routes/pizzaroutes');

app.use(express.json());


app.use('/api/pizzas', pizzaroutes);

app.get('/', (req, res) => {
  res.send('Server working');
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
