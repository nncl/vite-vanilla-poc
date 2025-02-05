# 🚀 Vite + Express Server with Docker

This project is a high-performance, SEO-optimized web application built using **Vite**, **SCSS**, **TypeScript**, and an **Express.js** server. It supports clean URLs, dynamic page loading, API endpoints, and is fully containerized with Docker.

---

## 📌 Features
- ✅ **Vite for fast builds & HMR (Hot Module Replacement)**
- ✅ **Express.js for server-side routing & API handling**
- ✅ **SCSS for modular styling**
- ✅ **Clean URLs (`/about` instead of `/about.html`)**
- ✅ **Gzip compression for better performance**
- ✅ **Dynamic `feat` API endpoint (`/api/feat`)**
- ✅ **404 routes redirect to `/` with a `302` status**
- ✅ **Docker support for containerized deployment**

---

## 🚀 Getting Started

### **1️⃣ Install Dependencies**
```sh
npm install
```

### **2️⃣ Run in Development Mode (Hot Reloading)**
```sh
npm run dev
```
✅ The app will be available at **[http://localhost:5173](http://localhost:5173)**

---

## 📦 Building for Production

### **1️⃣ Build the Application**
```sh
npm run build
```

### **2️⃣ Start the Express Server**
```sh
npm start
```
✅ The app will be available at **[http://localhost:3000](http://localhost:3000)**

---

## 🐳 Running with Docker

### **1️⃣ Build the Docker Image**
```sh
docker build -t my-node-app .
```

### **2️⃣ Run the Container**
```sh
docker run -p 3000:3000 my-node-app
```
✅ The app will be available at **[http://localhost:3000](http://localhost:3000)**

### **3️⃣ Run on a Custom Port**
You can change the external port when running the container:
```sh
docker run -p 8080:3000 my-node-app
```
✅ The app will now be available at **[http://localhost:8080](http://localhost:8080)**

Or set a different **internal port** using an environment variable:
```sh
docker run -e PORT=5000 -p 5000:5000 my-node-app
```
✅ Now the server runs on **port 5000** inside Docker, accessible at **[http://localhost:5000](http://localhost:5000)**

---

## 🔥 API Endpoints

### **GET `/api/feat`** - Returns feature data
```sh
curl http://localhost:3000/api/feat
```
✅ Response:
```json
{
  "feature": "Example Feature",
  "description": "This is an example feature endpoint.",
  "status": "active"
}
```

---

## ❌ Handling Non-Existent Routes
- Any unknown route **automatically redirects to `/` with a `302` status**.
- Example: Navigating to `/random-page` will **redirect to `/`**.

---

## 🛠 Project Structure
```
seo-performance-site/
│── src/                     # Frontend source code
│   ├── components/          # Web Components
│   ├── styles/              # SCSS styles
│   ├── pages/               # Page-specific JS
│   ├── main.ts              # Main TypeScript entry
│── index.html               # Home page
│── about.html               # About page
│── tsconfig.json            # TypeScript config
│── vite.config.ts           # Vite configuration
│── server.js                # Express.js server
│── package.json             # Project dependencies
│── Dockerfile               # Docker container setup
│── .gitignore               # Ignored files
```

---

## 📄 License
This project is licensed under **MIT License**.

🚀 **Now your project is fully optimized and ready for deployment!** Let me know if you need any refinements! 😊

