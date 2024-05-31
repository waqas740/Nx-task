# Task

Create a signup, sign in and sign out web app that allows users to create
accounts and have them registered as new users. The app should identify registered users and
ask them to sign in. Once the user signed in they should remain signed in for 8-hours and then
logged out automatically unless they sign out promptly.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`

`JWT_SECRET`

## Start the application

Before starting the application, please follow these steps:

- Convert `.env.example` file to `.env` and add environment variables.

- Run `npm run seed` to feed faker products into database

```bash
 npm run seed
```

- Run `npm start` to start the backend and frontend.

```bash
 npm start
```

- The backend URL would be

```bash
  HTTP://localhost:4200
```

- The backend URL would be

```bash
  HTTP://localhost:3000
```

- The api documentation URL:

```bash
  HTTP://localhost:3000/documentation
```
