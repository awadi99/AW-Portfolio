# <img src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png" width="40" /> My Portfolio Website

This is my personal **Portfolio Website**, where I showcase my skills, 3D animations, projects, experience, and achievements as a **Full-Stack MERN Developer**.  
The portfolio includes **Three.js 3D elements**, smooth animations, and a connected **Node.js backend** for handling contact forms and dynamic data.

---

## 🚀 Live Demo

👉 **View Portfolio:**  
```bash
https://aw-portfolio.onrender.com/
```
---

## ✨ Features

### 🎨 Frontend (React + Three.js)
- 🏠 Beautiful landing page with **Three.js 3D model/animation**
- 👨‍💻 About section with modern UI and animations
- 🛠️ Skills section with icons, animations & clean layout
- 📂 Projects section with cards, live demo links & GitHub links
- 📞 Contact form connected to backend
- 🌙 Light/Dark mode (optional)
- 📱 Fully responsive layout for mobile/tablet/desktop

### ⚙️ Backend (Node.js + Express + MongoDB)
- Stores contact form submissions
- Sends email notifications (if Nodemailer added)
- Provides API endpoints for portfolio data
- Uses MongoDB to store messages/project data

---

## 🧰 Tech Stack

### **Frontend**
- React.js  
- Three.js (3D elements)  
- Tailwind CSS / Custom CSS  
- Framer Motion (animations)  
- Axios  

### **Backend**
- Node.js  
- Express.js  
- MongoDB / Mongoose  
- CORS enabled  
- dotenv for environment config  

---

## 📂 Folder Structure

```bash
portfolio/
 ├── backend/
 │     ├── controllers/       # Contact, message handlers
 │     ├── models/            # MongoDB schemas
 │     ├── routes/            # API endpoints
 │     ├── config/            # DB connection
 │     └── server.js          # Entry point
 │
 └── frontend/
       ├── components/        # Navbar, Footer, 3D Models, Cards
       ├── pages/             # Home, About, Projects, Contact
       ├── threejs/           # 3D models, scene setup
       ├── assets/            # Images, Icons, 3D model files
       ├── styles/            # Global styles
       └── main.jsx           # React main entry
```

▶️ How to Run the Project

# ⚙️ Start backend
```bash
cd backend
npm install
npm start
```
# 💻 Start frontend
```bash
cd ../frontend
npm install
npm run dev
```
