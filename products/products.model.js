const products = [
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
];

function getAllProducts() {
    return products;
}

module.exports = {
    getAllProducts
}