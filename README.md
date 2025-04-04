# Frontend-CollabNest

# README.md

## Project Name: CollabNest

### Team Name: Cassiopeia

---

## Table of Contents
1. [Introduction](#introduction)
2. [Key Features and Functionalities](#key-features-and-functionalities)
3. [How to Run the Project](#how-to-run-the-project)
4. [Source Code Structure](#source-code-structure)
5. [Dependencies](#dependencies)
6. [Installation Steps](#installation-steps)
7. [Demo Video](#demo-video)
8. [Project Resources](#project-resources)
9. [Contributors](#contributors)

---

## Introduction
Welcome to CollabNest, a structured space for guided learning designed to bridge the gap between theoretical knowledge and practical implementation. This platform aims to connect students with meaningful projects, mentors, and professors, fostering a collaborative environment for skill development and project-based learning.

---

## Key Features and Functionalities
- **Multi-Domain Support:** Projects across Core Dev, Blockchain, Machine Learning, and more.
- **Smart Matching:** AI-driven project recommendations based on skills and interests.
- **Guided Learning:** Adaptive learning pathways and progress tracking.
- **Professor Collaboration:** Professors can list research opportunities and recruit students.
- **Structured Mentorship:** Senior students mentor juniors in project-based learning.
- **Certification & Recognition:** Auto-generated certificates and portfolio building.

---

## How to Run the Project
Follow these steps to set up and run the project on your local machine.

### Prerequisites
- **Node.js** (Recommended: Latest LTS version)
- **Vite** (For frontend development)
- **PostgreSQL** (Database)
- **Prisma** (ORM for database schema)
- **Express.js** (Backend framework)
- **Package Manager:** npm / yarn / pip
- **Dotenv** (For managing environment variables)

---

## Installation Steps

### Backend Setup
1. **Install Dependencies:**
   ```bash
   cd BACKEND-COLLABNEST/MLAPI
   npm install
   ```

2. **Create a `.env` File:**
   - Create a `.env` file in the root directory of the backend.
   - Add the following environment variables and replace the placeholders with your credentials:
     ```env
     DATABASE_URL="postgresql://username:password@localhost:5432/dbname"
     ```

3. **Set Up the Database:**
   - Run the following command to set up the database schema using Prisma:
     ```bash
     npx prisma generate
     ```

4. **Start the Backend Server:**
   ```bash
   npm start
   ```
   - The backend server will start at `http://localhost:3000`.

5. **Run the Reverse Proxy:**
   - Execute the `reverse_proxy.exe` file to enable reverse proxy functionality.

---

### Frontend Setup
1. **Install Dependencies:**
   ```bash
   cd FRONTEND-COLLABNEST
   npm install
   ```

2. **Start the Frontend Server:**
   ```bash
   npm run dev
   ```
   - The frontend server will start at `http://localhost:5173`.

---

### Project Recommendation System Setup
1. **Navigate to the MLAPI Folder:**
   ```bash
   cd BACKEND-COLLABNEST/MLAPI
   ```

2. **Install Required Libraries:**
   ```bash
   pip install numpy joblib fastapi scikit-learn uvicorn
   ```

3. **Run the Recommendation System:**
   ```bash
   python main.py
   ```

---

## Access the Application
- Open your browser and navigate to `http://localhost:80` to access the CollabNest platform.

---

## Source Code Structure

### Backend Structure
```
BACKEND-COLLABNEST/
│
├── MLAPI/
│   ├── node_modules/
│   ├── prisma/
│   ├── scripts/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   └── utils/
│   │       ├── .gitkeep
│   │       ├── errorHandler.js
│   │       ├── fileUpload.js
│   │       ├── firebase.js
│   │       ├── googleMeetService.js
│   │       ├── paginationHelper.js
│   │       └── sendNotifications.js
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── reverse_proxy.exe
│   └── reverse_proxy.py
```

### Frontend Structure
```
FRONTEND-COLLABNEST/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── mentor-dashboard/
│   │   ├── professor-dashboard/
│   │   └── student-dashboard/
│   ├── Landing.tsx
│   ├── login.tsx
│   ├── logout.tsx
│   ├── role.tsx
│   ├── signup.tsx
│   ├── routes/
│   ├── store/
│   ├── types/
│   ├── utils/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── vite-env.d.ts
├── .gitignore
├── components.json
└── eslint.config.js
```

---

## Dependencies
- **Frontend:** React, Tailwind CSS, Material UI
- **Backend:** Node.js, Express.js, Firebase
- **Database:** PostgreSQL
- **AI/ML:** Scikit-Learn, TensorFlow

---

## Demo Video
A demo video is included in the submission ZIP file. The video covers:
- Introduction to the solution
- Key features and functionalities
- Walkthrough of the platform
- Demonstration of unique aspects
- Code walkthrough

---

## Project Resources

### 🖼️ Presentation (PPT)  
[Click here to view on Canva](https://www.canva.com/design/DAGiVt5fcJo/AwnTtTtJXpPN_C4NsHhdCg/edit)

### 🎥 Demo Video  
[Watch the demo on Google Drive](https://drive.google.com/drive/folders/1mmjAOX9KIj4wSo78uK3830hyoe9mQGfb)

### 📄 Working Document  
[Open the Google Doc](https://docs.google.com/document/d/1Ifd3K83SOINvf_plkTn-6EWmhSaW4iNigpPB25zTwYA/edit?tab=t.4oehcf9s3avf)

---

## Contributors

### 🧠 Team Leads  
- [@AAnimeshTripathy](https://github.com/AAnimeshTripathy)  
- [@Look-man](https://github.com/Look-man)

### 💻 Team Members  
- [@Diptanshu-215](https://github.com/Diptanshu-215)  
- [@A-ryanVAT-S](https://github.com/A-ryanVAT-S)  
- [@Shreesh-125](https://github.com/Shreesh-125)  
- [@abhin07av](https://github.com/abhin07av)  
- [@Anish-ai](https://github.com/Anish-ai)  
- [@thefcraft](https://github.com/thefcraft)  
- [@Enum2](https://github.com/Enum2)

---

Thank you for reviewing our project! We look forward to your feedback.

---

**Note:** This is the primary submission for Cassiopeia.
