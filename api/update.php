<?php
include('functions.php');

// Assuming POST request with form data
$id = $_POST['id'];
$title = $_POST['title'];
$content = $_POST['content'];
$author = $_POST['author'];
$publication_date = $_POST['publication_date'];

if(updatePost($id, $title, $content, $author, $publication_date)) {
    echo "Post updated successfully!";
} else {
    echo "Error updating post!";
}
?>
