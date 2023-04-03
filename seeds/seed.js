const sequelize = require('../config/connection');
const { User, Gallery, Artwork } = require('../models');

const userData = require('./userData.json');
const galleryData = require('./galleryData.json');
const artworkData = require('./artworkData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Gallery.bulkCreate(galleryData);

  await Artwork.bulkCreate(artworkData);

  process.exit(0);
};

seedDatabase();