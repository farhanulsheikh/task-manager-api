
# Task Manager API

This is a simple RESTful API built with Node.js and Express to manage tasks.

## Features
- Create, Read, Update, and Delete (CRUD) operations for tasks.
- Modular structure with routes and controllers for better organization.

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/farhanulsheikh/task-manager-api.git
   cd task-manager-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm run dev
   ```

## Endpoints
- **POST /tasks**: Add a new task
- **GET /tasks**: Get all tasks
- **GET /tasks/:id**: Get a task by ID
- **PUT /tasks/:id**: Update a task by ID
- **DELETE /tasks/:id**: Delete a task by ID

## Project Structure
```
├── app.js         # Initializes Express and middleware
├── controller.js  # Handles business logic for tasks
├── routes.js      # Defines task-related routes
├── server.js      # Starts the server
├── package.json   # Manages project dependencies
└── README.md      # Project documentation (this file)
```

## License
This project is licensed under the MIT License.

## Contribution
Feel free to open issues or submit pull requests if you have ideas for improvements.

## Contact
For any questions, contact me via [GitHub](https://github.com/farhanulsheikh).
