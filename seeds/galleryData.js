const { Gallery } = require('../models');

const gallerydata = [
  {
    id: 1,
    name: 'Painting',
  },
  {
    id: 2,
    name: 'Photography Art',
  },
  {
    id: 3,
    name: 'Black and White Photography',
  },
  {
    id: 4,
    name: 'Craft',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;