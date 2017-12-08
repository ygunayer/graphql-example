const express = require('express');
const app = express();

const db = [
    { id: 1, name: 'Canan' },
    { id: 2, name: 'Candan' },
    { id: 3, name: 'Cavidan' }
];

app.get('/foo/:id', (req, res, next) => {
    const adam = db.filter(x => x.id == req.params.id)[0];
    res.send(adam);
});

const port = +process.env.PORT || 55000;
console.log(`Foo app running on port ${port}`);
app.listen(port);
