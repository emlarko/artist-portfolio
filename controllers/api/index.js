const router = require('express').Router();

const userRoutes = require('./user-routes');
const artRoutes = require('./artwork-routes');

router.use('/users', userRoutes);
router.use('/artworks', artRoutes);

module.exports = router;