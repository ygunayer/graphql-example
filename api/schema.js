const fs = require('fs');
const path = require('path');

const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = fs.readFileSync(path.join(__dirname, './schema.graphqls'), 'utf8');

module.exports = makeExecutableSchema({ typeDefs, resolvers });
