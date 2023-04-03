const commentFormHandler = async function (event) {
  event.preventDefault();

  const artwork_id = document.querySelector('.new-comment-form').dataset.artworkid;

  const comment_description = document
    .querySelector('#comment_description')
    .value.trim();

  if (comment_description) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        artwork_id,
        comment_description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    document.location.reload();
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
