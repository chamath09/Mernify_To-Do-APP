# Mernify_To-Do-APP
Mernify To-Do App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). This app allows users to manage their tasks efficiently, offering functionality to add, edit, delete, and mark tasks as complete or incomplete.

Table of Contents
 👉 Features
 👉 Technologies Used
 👉 Installation
 👉 Usage
 👉 API Endpoints
 👉 License

#Features

 👏 Task Management: Create, update, delete tasks.
 👏 Task Status: Mark tasks as complete or incomplete.
 👏 Real-time Updates: The app updates the task list in real-time.
 👏 Responsive Design: Works seamlessly across desktop and mobile devices.
 👏 Modern UI: Simple and clean interface for a better user experience.

#Technologies Used

 👏 Frontend: React, CSS, JavaScript
 👏 Backend: Node.js, Express.js
 👏 Database: MongoDB (for storing tasks)
 👏 API: RESTful API for task management

# Installation

## Prerequisites
Ensure you have the following installed:
Node.js (version 14 or later)
MongoDB (either locally or through a cloud provider like MongoDB Atlas)

#Steps
1. Clone the repository:
   git clone https://github.com/chamath09/mernify-todo-app.git

2. Navigate to the project directory:
   cd mernify-todo-app

3. Install backend dependencies:
   cd backend
   npm install

4. Install frontend dependencies:
   cd ../frontend
   npm install

5. Create a .env file in the backend directory and add the following:
   MONGO_URI=your-mongodb-connection-string
   PORT=5000

6. Start the MongoDB server (if running locally):
   mongod

7. Run the backend server:
   cd backend
   npm run dev\

8. Run the frontend React app:
   cd ../frontend
   npm start

#Usage
 👏 Open the app in your browser at http://localhost:5173.
 👏 Use the interface to add, edit, delete, or mark tasks as complete.
 👏 Data is stored in MongoDB, and the UI updates in real time.

#API Endpoints
👉 The backend API exposes the following endpoints:

#Task Endpoints
 👉 GET /api/tasks: Retrieve all tasks.
 👉 POST /api/tasks: Create a new task.
 👉 PUT /api/tasks/:id: Update an existing task.
 👉 DELETE /api/tasks/:id: Delete a task.

#License
🎯 This project is licensed under the MIT License - see the LICENSE file for details.


