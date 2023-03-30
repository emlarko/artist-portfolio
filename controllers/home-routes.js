const router = require('express').Router();
const { Gallery, User, Artwork } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Artwork,
          attributes: ['image_url', 'description'],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );
    res.render('homepage', {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/gallery/:id', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [username],
        },
        {
          model: Artwork,
          attributes: [
            'id',
            'title',
            'date',
            'image_url',
            'description',
          ],
        },
      ],
    });

    const gallery = dbGalleryData.get({ plain: true });
    res.render('gallery', { gallery });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one artwork
router.get('/artwork/:id', async (req, res) => {
  try {
    const dbArtworkData = await Artwork.findByPk(req.params.id);

    const artwork = dbArtworkData.get({ plain: true });
    res.render('artwork', { artwork });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;