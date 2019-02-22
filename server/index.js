const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../addToCart.db');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors')

app.use(parser.json());
app.use(cors())
app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/bundle', (req, res) => {
  res.send(path.join(__dirname + '/../client/dist/bundle.js'));
});

app.get('/api/items/:id', (req, res) => {
  //test that api path exists
    //console.log(req.params.id);
    db.all(`
    select * from competitors
    cross join product
    on competitors.productID = product.productID
    where product.productID=${req.params.id}
    `, (err, data) => {
      if (err) {
        //test to see if there's an error
        console.log(err, ' error here');
      } else {
        //see if the expected data equals 

        res.send(data);
        res.end();
      }
    });
});


app.listen(3011, () => {
  console.log('App listening on port 3011!');
});

/*

  select * from competitors
  inner join product
  on competitors.productID = product.productID
  where product.productID=5

*/