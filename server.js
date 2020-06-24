const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req, res) =>{
  const customers = [
    {id: 1, firstName: 'Jaxon', secondName: 'Koxeanu'},
    {id: 2, firstName: 'Fisteus', secondName: 'Calithos'}
  ];

  res.json(customers);
});

app.listen(port, () => console.log(`Server started at port ${port}...`));