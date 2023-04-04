const User = require('./User');
const Gallery = require('./Gallery');
const Artwork = require('./Artwork');
const Comment = require('./Comment');

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

Artwork.hasMany(Comment, {
  foreignKey: 'artwork_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Artwork, {
  foreignKey: 'artwork_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Gallery, Artwork, Comment };