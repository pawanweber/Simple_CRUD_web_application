<?php
include('functions.php');

// Assuming POST request with form data
$title = $_POST['title'];
$content = $_POST['content'];
$author = $_POST['author'];
$publication_date = $_POST['publication_date'];

if(createPost($title, $content, $author, $publication_date)) {
    echo "Post created successfully!";
} else {
    echo "Error creating post!";
}
?>
