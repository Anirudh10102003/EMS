# EMS – Employee Management System 🧑‍💼📊

A **frontend-only Employee Management System (EMS)** built using **React.js**.  
This project uses **browser localStorage** for authentication and data persistence.

---

## 🚀 Features

### 🔐 Authentication (Frontend Only)
- Admin and Employee login
- Role-based access control
- Login session stored in **localStorage**

### 👨‍💼 Admin Dashboard
- Admin login with predefined credentials
- View employees stored in localStorage
- Assign tasks to employees
- Logout functionality

### 👩‍💻 Employee Dashboard
- Employee login using stored credentials
- View assigned tasks
- Task status categories:
  - New
  - Active
  - Completed
  - Failed
- Personalized greeting using employee first name

---

## 🧠 State & Data Management

- **React Context API** → global auth & employee data
- **localStorage** → persistent data storage
- **useState & useEffect** → state & lifecycle handling

---

## 🛠 Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **Data Storage:** Browser LocalStorage
- **Bundler:** Vite
