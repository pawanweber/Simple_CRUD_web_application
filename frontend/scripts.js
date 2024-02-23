document.addEventListener('DOMContentLoaded', function () {
    const postsList = document.getElementById('posts-list');
    const addPostForm = document.getElementById('add-post-form');

    // Function to fetch all posts and display them
    function fetchAndDisplayPosts() {
        fetch('../api/index.php')
            .then(response => response.json())
            .then(posts => {
                postsList.innerHTML = '';
                posts.forEach(post => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <span class="post-title">Title: ${post.title}<br></span><span class="post-author"> Author: ${post.author}</span><br><span class="post-content"> Content: ${post.content}</span><br><br>
                        <button class="edit-btn post-btn" data-id="${post.id}">Edit</button>
                        <button class="delete-btn post-btn" data-id="${post.id}">Delete</button>
                    `;
                    postsList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching posts: ', error));
    }

    // Add event listener for form submission (adding new post)
    addPostForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch('../api/create.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(message => {
                console.log(message);
                fetchAndDisplayPosts(); // Refresh the list after adding a new post
                addPostForm.reset(); // Reset the form
            })
            .catch(error => console.error('Error adding post: ', error));
    });

    // Add event listeners for edit and delete buttons (event delegation)
    postsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-btn')) {
            const postId = event.target.getAttribute('data-id');
            window.location.href = `update.html?id=${postId}`; // Navigate to update page
        } else if (event.target.classList.contains('delete-btn')) {
            const postId = event.target.getAttribute('data-id');
            if (confirm('Are you sure you want to delete this post?')) {
                fetch('../api/delete.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `id=${postId}`
                })
                    .then(response => response.text())
                    .then(message => {
                        console.log(message);
                        fetchAndDisplayPosts(); // Refresh the list after deleting a post
                    })
                    .catch(error => console.error('Error deleting post: ', error));
            }
        }
    });

    // Initial fetch and display posts when the page loads
    fetchAndDisplayPosts();
});