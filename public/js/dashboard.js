const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#artwork-title').value.trim();

  const description = document.querySelector('#artwork-desc').value.trim();

  const imageURL = document.querySelector('#image-url').value.trim();

  if (title && description && imageURL) {
    const response = await fetch('/api/artwork', {
      method: 'POST',
      body: JSON.stringify({ title, description, imageURL}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to upload Artwork');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/artwork/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete Artwork');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
