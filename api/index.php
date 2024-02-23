<?php
include('functions.php');

if(isset($_GET['id'])) {
    // If ID is provided, fetch post by ID
    $postId = $_GET['id'];
    $post = getPostById($postId);
    echo json_encode($post);
} else {
    // If no ID provided, fetch all posts
    $posts = getAllPosts();
    echo json_encode($posts);
}
?>
