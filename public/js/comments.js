const commentFormHandler = async function (event) {
  event.preventDefault();

  const artwork_id = document.querySelector('.new-comment-form').dataset.artid;

  const comment_description = document
    .querySelector('#comment_description')
    .value.trim();

  if (comment_description) {
    console.log(comment_description);
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        artwork_id,
        comment_description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add Comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
