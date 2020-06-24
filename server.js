const express = require('express');
const app = express();
const port = 5000;

app.get("/", (req, res) =>{
  
})

app.get('/api/customers', (req, res) =>{
  const customers = [
    {id: 1, firstName: 'Jaxon', secondName: 'Koxeanu'},
    {id: 2, firstName: 'Fisteus', secondName: 'Calithos'}
  ];
  console.log("This route was reached");
  res.json(customers);
});

app.listen(port, () => console.log(`Server started at port ${port}...`));