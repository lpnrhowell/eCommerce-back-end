const { Product } = require('../models');
const productData = [{
        product_name: 'Ninja H2R',
        price: 14000.0,
        color: 'green',
        category_id: 1,
    },
    {
        product_name: 'Ninja Z1000',
        price: 11000.0,
        color: 'black',
        category_id: 1,
    },

    {
        product_name: 'ZG1400A8F Concours 14 (ABS)',
        price: 15000.0,
        color: 'gray',
        category_id: 2,
    },
    {
        product_name: 'Ducati Diavel 1260 S',
        price: 13349.99,
        color: 'black',
        category_id: 2,
    },
    {
        product_name: 'Honda Rebel 1100',
        price: 9999.99,
        color: 'red',
        category_id: 3,
    },
    {
        product_name: 'Honda CBR600RR',
        price: 10999.99,
        color: 'yellow',
        category_id: 1,
    },
    {
        product_name: 'Harley-Davidson Electra Glide',
        price: 24999.99,
        color: 'black',
        category_id: 3,
    },
    {
        product_name: 'Suzuki V-Strom 1050A/XA',
        price: 9999.99,
        color: 'black',
        category_id: 3,
    },

];
const seedProducts = () => Product.bulkCreate(productData);
module.exports = seedProducts;