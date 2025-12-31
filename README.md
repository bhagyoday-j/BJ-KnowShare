# BJ KnowShare

BJ KnowShare is a blogging platform where I and other authors share useful information across various domains. The goal of this project is to create a simple, fast, and scalable blog website with support for images, multiple authors, and dynamic content management.

This project is built using:

* **Node.js**
* **Express.js**
* **MongoDB**
* **Cloudinary** (for image upload & storage)
* **EJS** (as the frontend templating engine)

---

## ✨ Features

* 📝 Create, read, update, and delete blog posts
* 👤 Multi-author support
* 🖼️ Image upload using Cloudinary
* 🔍 Category and domain-wise posts
* 📱 Responsive UI using EJS and CSS
* 🗄️ MongoDB database for storing posts and users
* ⚙️ Server-side rendering using EJS templates

---

## 🛠️ Tech Stack

**Frontend**

* EJS
* CSS / Bootstrap

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (Mongoose)

**Media Storage**

* Cloudinary

---

## 🚀 Installation & Setup

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd bj-knowshare
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root directory

Add the following environment variables:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start the server

```bash
npm start
```

or for development with nodemon

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

## 📂 Project Structure (example)

```
BJ-KnowShare
│
├── models/          # Mongoose models
├── routes/          # Express routes
├── controllers/     # Controller logic
├── views/           # EJS templates
├── public/          # Static files
├── app.js           # Main app entry
└── README.md
```

---

## 🖼️ Image Handling with Cloudinary

All blog post images are uploaded and stored securely using **Cloudinary**.
Ensure your Cloudinary credentials are configured in the `.env` file before running the project.

---

## 📌 Future Enhancements

* 🔐 Authentication & authorization (Admin/Author/User)
* 💬 Comments system
* ❤️ Like & save posts
* 🏷️ Tags and advanced search
* 📊 Admin dashboard

---

## 🙌 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

This project is for learning and personal use. You may modify and use it as needed.

