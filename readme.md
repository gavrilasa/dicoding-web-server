# Dicoding Web Server

Dicoding Web Server is a simple RESTful API for managing notes. This project allows users to create, read, update, and delete notes. It is built using Node.js and follows best practices for structuring a web server.

## Features

- **Create Notes**: Add new notes with a title, tags, and body.
- **Read Notes**: Retrieve all notes or a specific note by its ID.
- **Update Notes**: Edit existing notes.
- **Delete Notes**: Remove notes by their ID.

## Technologies Used

- Node.js
- Hapi.js (for building the server)
- Nanoid (for generating unique IDs)

## Installation

To get started with the Dicoding Web Server, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/dicoding-web-server.git
   cd dicoding-web-server
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the server**:

   ```bash
   node index.js
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### 1. Add a Note

- **Endpoint**: `POST /notes`
- **Request Body**:
  ```json
  {
  	"title": "Note Title",
  	"tags": ["tag1", "tag2"],
  	"body": "This is the body of the note."
  }
  ```
- **Response**:
  - **Success**: `201 Created`
  - **Fail**: `500 Internal Server Error`

### 2. Get All Notes

- **Endpoint**: `GET /notes`
- **Response**:
  - **Success**: `200 OK`
  ```json
  {
  	"status": "success",
  	"data": {
  		"notes": [
  			/* array of notes */
  		]
  	}
  }
  ```

### 3. Get Note by ID

- **Endpoint**: `GET /notes/{id}`
- **Response**:
  - **Success**: `200 OK`
  - **Fail**: `404 Not Found`

### 4. Edit Note by ID

- **Endpoint**: `PUT /notes/{id}`
- **Request Body**:
  ```json
  {
  	"title": "Updated Note Title",
  	"tags": ["tag1", "tag2"],
  	"body": "This is the updated body of the note."
  }
  ```
- **Response**:
  - **Success**: `200 OK`
  - **Fail**: `404 Not Found`

### 5. Delete Note by ID

- **Endpoint**: `DELETE /notes/{id}`
- **Response**:
  - **Success**: `200 OK`
  - **Fail**: `404 Not Found`
