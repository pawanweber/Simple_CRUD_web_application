# Simple CRUD Web Application

This is a simple CRUD (Create, Read, Update, Delete) web application for managing blog posts. It allows users to perform various actions such as viewing a list of blog posts, viewing details of a specific blog post, creating a new blog post, updating an existing blog post, and deleting a blog post.

## Backend

The backend of this application is built using PHP and MySQL. It utilizes the Laravel PHP framework (version 8.x or later) to handle API endpoints for CRUD operations on blog posts. The database schema includes the following fields for blog posts:

- Title (string)
- Content (text)
- Author (string)
- Publication Date (date)

Laravel's built-in form validation is used to validate input fields, and appropriate error handling and response codes are implemented for different scenarios. Pagination is also implemented for the blog posts list endpoint.

## Frontend

The frontend of this application is built using HTML, CSS, and JavaScript. It provides a user-friendly interface for interacting with the API endpoints. The following features are implemented in the frontend:

- Viewing details of a specific blog post
- Creating and updating blog posts with appropriate form validation
- Deleting a blog post

The frontend is designed to be responsive, with a visually appealing layout and user-friendly design.


## Usage

1. Clone this repository to your local machine.
2. Set up a PHP development environment like XAMPP or WAMP.
3. Import the `database.sql` file into your MySQL database to create the necessary tables.
4. Configure the database connection in `config/config.php`.
5. Start your PHP server.
6. Access the application through the browser.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.