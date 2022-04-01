const express= require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product{
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String!
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
    products: [
        {
            id: 'blueshoe',
            description: 'Blue shoe',
            price: 44.00
        },
        {
            id: 'bluejean',
            description: 'Blue jean',
            price: 70.00
        },
    ],
    orders: [
        {
            date: '2000-05-05',
            subtotal: 70.00,
            items:[
                {
                    product: {
                        id: 'blueshoe',
                        description: 'new blue shoe',
                        price: 50.00
                    },
                    quantity: 2
                }
            ]
        }
    ]
}

const app = express();
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true
}))
app.listen(3000, () => {
    console.log('Graphql server running')
})