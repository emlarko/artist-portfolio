const delButtonHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#artwork-title').value.trim();
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/artworks/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/artworksDashboard');
      } else {
        alert('Failed to delete Artwork');
      }
    }
  };
  document
  .querySelector('.artwork-list')
  .addEventListener('click', delButtonHandler);