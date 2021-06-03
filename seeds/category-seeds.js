const { Category } = require('../models');
const categoryData = [{
        category_name: 'Sports',
    },
    {
        category_name: 'Cruiser',
    },
    {
        category_name: 'Touring',
    },
    {
        category_name: 'Dual Sport',
    },
    {
        category_name: 'Standard',
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;