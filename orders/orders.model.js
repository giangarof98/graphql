const orders = [
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

function getAllOrders(){
    return orders;
}

module.exports = {
    getAllOrders
}