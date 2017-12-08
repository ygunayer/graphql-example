const express = require('express');
const app = express();

const db = [
    { id: 1, name: 'Ahmed', foo_id: 1 },
    { id: 2, name: 'Mehmed', foo_id: 1 },
    { id: 3, name: 'Fikred', foo_id: 1 },
    { id: 4, name: 'Saffed', foo_id: 2 },
]

app.get('/bar/:id', (req, res, next) => {
    const adam = db.filter(x => x.id == req.params.id)[0];
    res.send(adam);
});

app.get('/by-foo-id/:id', (req, res, next) => {
    const adamlar = db.filter(x => x.foo_id == req.params.id);
    res.send(adamlar);
});

const port = +process.env.PORT || 54000;
console.log(`Bar app running on port ${port}`);
app.listen(port);
