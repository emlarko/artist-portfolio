const User = require('./User');
const Gallery = require('./Gallery');
const Artwork = require('./Artwork');

Gallery.hasMany(Artwork, {
  foreignKey: 'gallery_id',
  onDelete: 'CASCADE',
});

Artwork.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

User.hasMany(Artwork, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Artwork.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Gallery, Artwork };