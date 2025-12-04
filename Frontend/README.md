# ⚛️ React + ⚡ Vite

A minimal and modern setup to build **fast React applications** using **Vite**, featuring HMR, ESLint rules, and optional compiler support.

This template is perfect for developers who want:
- 🚀 Ultra-fast development  
- 🔥 Hot Module Replacement (HMR)  
- 🎯 Clean project structure  
- 🛠️ Easy plugin configuration  

---

## 🌟 What's Included?

### 🔌 Official React Plugins
You can choose between two official Vite plugins:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)**  
  Uses **Babel** (or **oxc** with rolldown) and supports Fast Refresh.

- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**  
  Uses **SWC** for faster, native-speed compilation and Fast Refresh.

---

## 🧠 React Compiler (Optional)

The **React Compiler** is *not enabled* in this template because it impacts build and development performance.

If you want to enable it:  
👉 Follow the official guide here:  
https://react.dev/learn/react-compiler/installation

---

## 📁 File Structure
```bash
project/
 ├── public/
 ├── src/
 │     ├── assets/
 │     ├── components/
 │     ├── App.jsx
 │     └── main.jsx
 ├── index.html
 ├── vite.config.js
 └── package.json
