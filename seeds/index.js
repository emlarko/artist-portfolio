const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedArtworks = require('./artworkData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedArtworks();

  process.exit(0);
};

seedAll();