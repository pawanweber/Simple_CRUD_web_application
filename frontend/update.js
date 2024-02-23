document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // Fetch post details by ID
    fetch(`../api/index.php?id=${postId}`)
        .then(response => response.json())
        .then(post => {
            // Fill form fields with post details
            document.getElementById('title').value = post.title || "";
            document.getElementById('content').value = post.content || "";
            document.getElementById('author').value = post.author || "";
            document.getElementById('publication_date').value = post.publication_date || "";
        })
        .catch(error => console.error('Error fetching post details: ', error));

    const updatePostForm = document.getElementById('update-post-form');
    updatePostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        formData.append('id', postId); // Include post ID in the form data

        fetch('../api/update.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(message => {
            console.log(message);
            // Redirect to index.html after updating post
            window.location.href = 'index.html';
        })
        .catch(error => console.error('Error updating post: ', error));
    });
});
