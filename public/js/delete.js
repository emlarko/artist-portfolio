const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/artworks/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/current-artworks');
    } else {
      alert('Failed to delete Artwork');
    }
  }
};

document
  .querySelector('.artwork-list')
  .addEventListener('click', delButtonHandler);
