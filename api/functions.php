<?php
include('../config/config.php');

function getAllPosts() {
    global $conn;
    $sql = "SELECT * FROM blog_posts";
    $result = $conn->query($sql);
    $posts = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }
    }
    return $posts;
}

function getPostById($id) {
    global $conn;
    $sql = "SELECT * FROM blog_posts WHERE id = $id";
    $result = $conn->query($sql);
    return $result->fetch_assoc();
}

function createPost($title, $content, $author, $publication_date) {
    global $conn;
    $sql = "INSERT INTO blog_posts (title, content, author, publication_date) VALUES ('$title', '$content', '$author', '$publication_date')";
    return $conn->query($sql);
}

function updatePost($id, $title, $content, $author, $publication_date) {
    global $conn;
    $sql = "UPDATE blog_posts SET title='$title', content='$content', author='$author', publication_date='$publication_date' WHERE id=$id";
    return $conn->query($sql);
}

function deletePost($id) {
    global $conn;
    $sql = "DELETE FROM blog_posts WHERE id=$id";
    return $conn->query($sql);
}
?>
