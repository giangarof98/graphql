const express= require('express');
const path = require('path')
const {graphqlHTTP} = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const {loadFilesSync} = require('@graphql-tools/load-files');

const typeArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
    typeDefs: [typeArray]
});

const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model')
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Graphql server running')
});