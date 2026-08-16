# 📸 SnapFeed

A full-stack social feed application built with the MERN stack.

SnapFeed allows users to create image-based posts and view them in a dynamic feed. The project demonstrates a complete frontend-to-backend workflow using React, Node.js, Express.js, MongoDB, Mongoose, and ImageKit for image storage.

## Features

- Create posts with images
- View posts in a feed
- Image upload using ImageKit
- REST API integration
- MongoDB database
- React frontend
- Express.js backend
---

## 📌Features

- Create and view image posts
- Image upload using ImageKit
- REST API integration
- MongoDB database
- React frontend
- Express.js backend
- Axios API requests
- Environment-based configuration
---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, CSS, Axios |
| Backend | Node.js, Express.js, REST API, Multer, CORS |
| Database | MongoDB, Mongoose |
| Cloud / Storage | ImageKit |
| Development Tools | Git, GitHub, VS Code, Postman |
---

## 📌 Project Structure

```text
SnapFeed/
│
├── Backend/
│   ├── src/
│   │   ├── db/
│   │   ├── models/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx
│   │   │   └── feed.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 📌 Application Workflow

 SnapFeed follows a simple frontend-to-backend architecture:

* The React frontend communicates with the Express API using Axios. 
* The backend handles image uploads through Multer and ImageKit.\
*  Mongoose manages post data stored in MongoDB.
* The API response is then returned to the React frontend and displayed in the feed.

<img width="885" height="604" alt="image" src="https://github.com/user-attachments/assets/c6abda56-8002-486d-bf84-1a75fb057fc4" />



---

## 📌 API Endpoints

| Method | Endpoint       | Description                     |
| ------ | -------------- | ------------------------------- |
| `POST` | `/create-post` | Create a new post with an image |
| `GET`  | `/posts`       | Retrieve posts for the feed     |

> More endpoints and functionality can be added as the project evolves.

---

## 📌 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YashDhame9906/SnapFeed.git
```

```bash
cd SnapFeed
```

### 2. Backend Setup

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Start the backend:

```bash
node server.js
```

---

### 3. Frontend Setup

Open another terminal:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server will provide the local frontend URL in the terminal.

---
## 📌 Future Improvements

| Area | Planned Improvements |
|---|---|
| Authentication | User registration, login, JWT authentication |
| Authorization | Protected routes and user-based access control |
| User Features | User profiles, likes, comments |
| Post Management | Edit and delete posts |
| Discovery | Post search and pagination |
| Validation | Backend request validation and input sanitization |
| Error Handling | Centralized error handling and consistent API responses |
| UI/UX | Improved responsive design and user experience |

---

## 🎯 Learning Goal

The main goal of SnapFeed is to understand how a **MERN application works as a complete system**, from a React user interface to REST APIs, database operations, and cloud image storage.

The project will continue to evolve as new backend concepts such as **validation, authentication, authorization, and advanced API architecture** are learned.

---

## 👨‍💻 Author

**Yash Dhame**

Computer Engineering Student | MERN Full-Stack Developer

GitHub: [YashDhame9906](https://github.com/YashDhame9906)

---

## ⭐ Acknowledgement

Built as part of my journey learning **MERN Stack development and backend engineering**.
