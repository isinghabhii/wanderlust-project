# 🌍 Wanderlust - Travel Listings Web App built with MERN Stack

[![npm](https://img.shields.io/badge/npm-v9.0.0-red?logo=npm)](https://www.npmjs.com/)  
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)](https://www.mongodb.com/)  
[![Render](https://img.shields.io/badge/Deploy-Render-blue?logo=render)](https://render.com/)  
[![Express](https://img.shields.io/badge/Backend-Express.js-lightgrey?logo=express)](https://expressjs.com/)  
[![NodeJS](https://img.shields.io/badge/Runtime-Node.js-green?logo=node.js)](https://nodejs.org/)  
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
[![EJS](https://img.shields.io/badge/Templating-EJS-orange)](https://ejs.co/)

---

Wanderlust is a full-stack web application inspired by Airbnb, built using the **MERN stack** (without React – frontend rendered with **EJS templates**).  
It allows users to browse, create, and manage travel listings with images, pricing, and interactive maps.

🌐 **Live Demo:** 👉 [Wanderlust on Render](https://wanderlust-project-hnaz.onrender.com/listings)

---

## ✨ Features

- 🔑 **User Authentication** with [Passport.js](http://www.passportjs.org/) (Register / Login / Logout)
- 🏠 **Listings CRUD** – Create, Read, Update, Delete listings
- 🖼️ **Image Uploads** with [Multer](https://github.com/expressjs/multer) + [Cloudinary](https://cloudinary.com/)
- 🗺️ **Interactive Maps** powered by [Mapbox](https://www.mapbox.com/)
- 🗄️ **MongoDB Atlas** for database
- ☁️ **Render** for hosting & deployment
- 🎨 **EJS Templating** for server-side rendering
- 🔒 **Secure Sessions & Flash Messages** for better user experience

---

## 🛠️ Tech Stack

**Frontend:**

- EJS (templating engine)
- Bootstrap (UI styling & responsive design)

**Backend:**

- Node.js
- Express.js
- Passport.js (authentication)
- Multer (file uploads)

**Database & Cloud Services:**

- MongoDB Atlas (database)
- Cloudinary (image storage & optimization)
- Mapbox (maps & geolocation)

**Deployment:**

- Render.com

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust

   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Create a `.env` file in the root directory and add the following:**

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   MAPBOX_TOKEN=your_mapbox_token
   MONGO_ATLAS_URL=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret

   ```

4. **Run the app**
   ```bash
   nodemon app.js
   ```

Then open: http://localhost:3000

## Project Structure

    ```bash
        wanderlust/
    ├─ 📁 controllers/ # Route logic & handlers
    ├─ 📁 init/ # Initialization helpers
    ├─ 📁 models/ # Mongoose schemas & models
    ├─ 📁 node_modules/ # Dependencies
    ├─ 📁 public/ # Static assets (CSS, JS, Images)
    ├─ 📁 routes/ # Express routes
    ├─ 📁 utils/ # Utility/helper functions
    ├─ 📁 views/ # Templates (EJS/Pug/Handlebars)
    ├─ ⚙️ .env # Environment variables
    ├─ 📄 .gitignore # Ignored files
    ├─ 🚀 app.js # Main entry point
    ├─ ☁️ cloudConfig.js # Cloudinary/Cloud setup
    ├─ 🔒 middleware.js # Custom middleware
    ├─ 📦 package.json # Dependencies & scripts
    ├─ 📦 package-lock.json # Locked dependencies
    └─ 🗂 schema.js # Schema initialization
    ```

## 📸 Screenshot

<img width="1067" height="613" alt="image" src="https://github.com/user-attachments/assets/052a5bd7-d31e-4707-b934-611d949d08ce" />

<img width="1069" height="616" alt="image" src="https://github.com/user-attachments/assets/c898a182-017c-45ef-b734-98aace626cfc" />


## Future Improvements

- 💳 Implement booking system with payments
- 👤 User profile management
- 🔍 Advanced search & filtering options
