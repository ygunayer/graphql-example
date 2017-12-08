const express = require('express');
const app = express();
const schema = require('./schema');
const resolvers = require('./resolvers');
const graphqlHTTP = require('express-graphql');

const graphql = graphqlHTTP({
    schema,
    root: resolvers,
    graphiql: true
});

app.use('/graphql', graphql);

app.listen(50000);
console.log('aşsdia')
