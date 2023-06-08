const router = require('express').Router();

const userRoutes = require('./user-routes');
const artRoutes = require('./artwork-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/artworks', artRoutes);
router.use('/comments', commentRoutes);

module.exports = router;