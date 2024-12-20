
# Medium-Blog Application

A full-stack blogging platform built using the MERN stack (MongoDB, Express, React, Node.js) with TypeScript. This project demonstrates the use of modern web development practices to create a scalable, secure, and user-friendly blog application.

## Features

- **User Authentication**: Secure user login and registration.
- **CRUD Operations**: Users can create, edit, delete, and view blog posts.
- **Text Formatting & Media Embedding**: Support for rich text formatting and embedding images/videos in posts.
- **Post Categories**: Categorize posts for better organization.
- **Responsive Design**: Mobile-friendly layout for a seamless experience across devices.
- **Serverless Backend**: Deployed using Cloudflare for scalability and optimized performance.
- **Dockerized Application**: Containerized for consistent development, testing, and production environments.

## Tech Stack

- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL, Prisma ORM
- **Containerization**: Docker
- **Deployment**: Cloudflare (Serverless), Versel
- **Version Control**: Git, GitHub

## Installation

1. **Clone the repository**:

3. **Install dependencies for both frontend and backend**:

   - **Frontend**:

     ```bash
     cd frontend
     npm install
     ```

   - **Backend**:

     ```bash
     cd backend
     npm install
     ```

4. **Set up environment variables** for Firebase and PostgreSQL in `.env` files in both frontend and backend directories.

5. **Run the application**:

   - Start the backend:

     ```bash
     npm run dev
     ```

   - Start the frontend:

     ```bash
     cd frontend
     npm run start
     ```


## Docker Setup

To run the application in a Docker container, you can use the following commands:

1. **Build the Docker images**:

   ```bash
   docker-compose build
   ```

2. **Run the application**:

   ```bash
   docker-compose up
   ```

   This will launch both the backend and frontend services inside Docker containers.

## Deployment

This project is deployed using Cloudflare's serverless platform for the backend and can be hosted on any platform supporting React for the frontend. The deployment process involves building the frontend and backend, followed by deploying to respective services.

## Contributing

Feel free to fork the project, open issues, and submit pull requests. Contributions are always welcome!

