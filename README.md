# BJ KnowShare

**BJ KnowShare** is a blogging platform where authors can share useful knowledge across different domains.
The project focuses on **content curation**, allowing multiple authors to publish articles with images while maintaining a simple, fast, and scalable blog system.

The platform supports blog management, multi-author publishing, and image handling through a cloud-based storage system.

---

## Live Demo

Try the application here:

**[Open Live Demo](https://bj-knowshare.onrender.com/)**

---

## Features

* Admin panel to create and manage authors
* Create, read, update, and delete blog posts (CRUD)
* Multi-author blogging system
* Image upload and storage using Cloudinary
* Category-based and domain-wise blog organization
* Responsive user interface
* Server-side rendering using EJS templates
* MongoDB database for storing posts and author data

---

## Tech Stack

### Frontend

* EJS (Embedded JavaScript Templates)
* CSS
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB with Mongoose

### Media Storage

* Cloudinary (for blog images)

---

## Image Handling

All blog images are uploaded and securely stored using **Cloudinary**.

Before running the project, ensure your Cloudinary credentials are configured in the `.env` file:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

This allows the platform to upload, store, and deliver images efficiently.

---

## Project Goals

The goal of this project is to build a blogging platform that demonstrates:

* Server-side rendering with EJS
* Scalable backend architecture with Node.js and Express
* Efficient media storage using Cloudinary
* Multi-author content management
* Clean and simple blog publishing workflow

---

## Future Enhancements

* Comment system for blog posts
* Like and save functionality
* Tag-based categorization
* Advanced search and filtering
* Full admin dashboard
* Rich text editor for writing posts

---

## Author

Bhagyoday Jadhav
Computer Engineering Student
Backend & MERN Stack Developer
