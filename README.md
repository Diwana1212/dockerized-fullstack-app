# React + Node.js Dockerized Fullstack App

This is a simple fullstack web application built with:
- **React (Frontend)**
- **Node.js with Express (Backend)**
- Dockerized with Docker Compose

## 📦 Project Structure

react-node-docker-app/
│
├── backend/ # Node.js backend
│ ├── Dockerfile
│ └── index.js
│
├── frontend/ # React frontend
│ ├── Dockerfile
│ └── src/
│ └── App.js
│
├── docker-compose.yml # Multi-container Docker setup
└── README.md # Project documentation

----------------------------------------------


## 🚀 Features

- Simple frontend: Displays a message
- Simple backend: REST API returning JSON
- Communicates between frontend and backend
- Dockerized using `docker-compose`
- Easy to extend (MongoDB, NGINX, CI/CD, etc.)

---

## 🛠️ Getting Started

### Prerequisites

- Docker & Docker Compose installed

### 🐳 Run the App

```bash
docker-compose up --build

----------------------------------------
This will:

Build frontend and backend images

Start both containers

🌐 Access the App

Service	URL
Frontend http://localhost:3000
Backend	http://localhost:5000/api

-------------------------------

🧪 API Test
Test backend directly:

 http://localhost:5000/api


