# 📦 Warehouse DB Management System

A full-stack web application designed to manage warehouse operations efficiently. This system provides a structured interface for handling inventory, employees, departments, and warehouse data using a robust backend API and responsive frontend.

---

## 📋 Table of Contents

* [About](#about)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Environment Setup](#environment-setup)
* [Database Setup](#database-setup)
* [Getting Started](#getting-started)
* [Usage](#usage)

---

## 🎯 About

The **Warehouse DB Management System** is a comprehensive solution for managing warehouse operations through a centralized database system. It enables efficient tracking of inventory, employee assignments, and departmental organization while maintaining data integrity and accessibility.

---

## ✨ Features

* 📊 **Full CRUD Operations** – Create, Read, Update, and Delete records
* 🏢 **Warehouse Management** – Manage multiple warehouses and departments
* 📦 **Inventory Tracking** – Monitor stock levels and product details
* 👨‍💼 **Employee Management** – Assign employees to departments
* 🔗 **RESTful API** – Structured backend communication
* ⚡ **Real-Time Updates** – Seamless frontend-backend interaction
* 💾 **Persistent Storage** – Reliable SQL-based database

---

## 🛠 Tech Stack

| Category     | Technologies             |
| ------------ | ------------------------ |
| Frontend     | JavaScript, HTML, CSS    |
| Backend      | Node.js, Express.js      |
| Database     | MySQL / PostgreSQL (SQL) |
| Architecture | Full-Stack (MVC Pattern) |

---


## 📋 Prerequisites

Make sure you have the following installed:

* Node.js (v14 or higher)
* npm 
* MySQL Workbench (or any SQL database tool)
* Git

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/np-codes/Warehouse_DB_Management_System.git
cd Warehouse_DB_Management_System
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## ⚙️ Environment Setup

### Backend `.env`

Create a `.env` file inside the `backend` folder:

```env
DB_HOST=localhost
DB_PORT=5000
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_schema_name
```

### Frontend `.env`

Create a `.env` file inside the `frontend` folder:

```env
VITE_BASE_URL=http://localhost:3000/warehousedb
```

---

## 🗄 Database Setup

To set up the database using **MySQL Workbench**:

1. Open MySQL Workbench
2. Create a new schema named:

```
warehouse_db
```

3. Open the file:

```
warehouseFrame.sql
```

4. Run the script to:

   * Create all tables
   * Define relationships
   * Insert initial/sample data

This will fully initialize your database for the application.

---

## ▶️ Getting Started

### Start Backend Server

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 💡 Usage

* Access the frontend in your browser
* Interact with warehouse data through the UI
* Perform CRUD operations on

---

