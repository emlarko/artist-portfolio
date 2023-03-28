const { Artwork } = require('../models');

const artworkdata = [
  {
    id: 1,
    title: 'Blossoming Apricot',
    image_url: 'https://res.cloudinary.com/dw7efo700/image/upload/v1680032815/artwork/pollinate_xwxvdk.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
    gallery_id: 1,
  },
  {
    id: 2,
    title: 'Blossoming Apricot',
    image_url: '',
    description:
      'Sandy beach with the blue sea and sky in the background.',
    gallery_id: 2,
  },
  {
    id: 3,
    title: 'Blossoming Apricot',
    image_url: 'https://res.cloudinary.com/dw7efo700/image/upload/v1680033028/artwork/986300010033_rr0cv8.jpg',
    description:
      'Two beach chairs under a beach umbrella on the beach.',
    gallery_id: 3,
  },
  {
    id: 4,
    title: 'Blossoming Apricot',
    image_url: 'https://res.cloudinary.com/dw7efo700/image/upload/v1680033126/artwork/DSC_1037_kxxatu.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
    gallery_id: 4,
  },
];

const seedArtworks = () => Artwork.bulkCreate(artworkdata);

module.exports = seedArtworks;