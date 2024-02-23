CREATE DATABASE IF NOT EXISTS blog_crud;
USE blog_crud;

CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    publication_date DATE NOT NULL
);