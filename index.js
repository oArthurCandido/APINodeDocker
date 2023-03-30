const express = require('express');

const app = express();
const port = 3000;

let user;

app.listen(port, () => {
  console.log(`MicroAPI app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  if (user === undefined) {
    res.json({
      name: 'Annimar',
      email: 'annimar@annimar.com',
      password: '123456'
    });
  } else {
    res.json(user);
  }
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// app.post('/bar', (req, res) => {
//   let body = req.body;
//   user = body;
//   console.log(req.body);
//   res.send(req.body.foo);
// });
