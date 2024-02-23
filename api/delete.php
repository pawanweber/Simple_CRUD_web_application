<?php
include('functions.php');

// Assuming POST request with form data
$id = $_POST['id'];

if(deletePost($id)) {
    echo "Post deleted successfully!";
} else {
    echo "Error deleting post!";
}
?>