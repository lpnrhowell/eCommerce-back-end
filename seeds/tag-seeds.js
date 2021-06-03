const { Tag } = require('../models');
const tagData = [
    {
        tag_name: 'Kawasaki',
    },
    {
        tag_name: 'Suzuki',
    },
    {
        tag_name: 'Honda',
    },
    {
        tag_name: 'Harley',
    },
    {
        tag_name: 'Yahmaha',
    },
    {
        tag_name: 'BMW',
    },
    {
        tag_name: 'Ducati',
    }
  
];
const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags;