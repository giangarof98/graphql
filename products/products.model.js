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

function getProductsByPrice(min, max){
    return products.filter((product) => {
        return product.price >= min && product.price <= max;

    })
}

function getProductsById(id){
    return products.find((product) => {
        return product.id === id;
    })
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById
}