const request = require('request');

const doGet = (url) => {
    return new Promise((resolve, reject) => {
        request({
            url,
            json: true
        }, (err, response, body) => {
            if (err) {
                return reject(err);
            }

            resolve(body);
        });
    });
};

const Foo = {
    bars: (foo) => doGet(`http://localhost:54000/by-foo-id/${foo.id}`)
};

const Bar = {
    foo: (bar) => doGet(`http://localhost:55000/foo/${bar.foo_id}`)
};

const Query = {
    foo: (_, { id }) => doGet(`http://localhost:55000/foo/${id}`),
    bar: (_, { id }) => doGet(`http://localhost:54000/bar/${id}`)
};

module.exports = {
    Query,
    Foo,
    Bar
};
