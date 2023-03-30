const router = require('express').Router();
const { Artwork } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newArt = await Artwork.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newArt);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const artData = await Artwork.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!artData) {
      res.status(404).json({ message: '404 Artwork ID not found' });
      return;
    }

    res.status(200).json(artData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;