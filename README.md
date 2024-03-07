# User API

## Goal

The goal of this project is to create a User CRUD API. It allows users to perform basic CRUD operations (Create, Read, Update, Delete) on user data.
You first need to register and then authenticate to be able to Read Update and Delete

## Architecture

This project follows a clean architecture approach with a pragmatic twist. It separates concerns into different layers, such as the application layer, business logic (domain) layer, and data access layer. This architecture promotes modularity, testability, and maintainability.



## Getting Started

To start the project, follow these steps:

1. Install the required dependencies by running the following command:
    ```
    npm install
    ```

2. Start the API server by running the following command:
    ```
    npm run start
    ```

3. The API server will start running on a specified port. You can access it using the provided URL.

## Authentication

This project uses token-based authentication. To obtain a token, follow these steps:

1. Register by sending a POST request to the `/register` route with your email and password.

2. Log in by sending a POST request to the `/login` route with your email and password. The response will include an `x-api-key` header containing the token.

3. Include the `x-api-key` token in the headers of subsequent requests to authenticate and authorize your operations.

Note: Make sure to keep your token secure and do not share it with others.

## Running Tests

To run the tests for this project, use the following command:
```
npm run test
```

## Next steps

1. Add Docker and Docker-compose
2. Add end to end tests
