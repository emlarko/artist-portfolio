const User = require('./User');
const Gallery = require('./Gallery');
const Artwork = require('./Artwork');

Gallery.hasMany(Artwork, {
  foreignKey: 'gallery_id',
});

Artwork.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Artwork };