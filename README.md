# ⚡ Supabase Auth System – React App

A modern, fully functional authentication system built with **React.js** and **Supabase**. Supports secure user registration, email/password sign-in, social logins (Google/GitHub), protected routing, contextual auth handling, and a dynamic dashboard experience.

> **Live Demo**: [https://react-supabse-authentication.vercel.app](https://react-supabse-authentication.vercel.app)

## 📬 Contact

**Author**: [sfsuper2020@gmail.com](mailto:sfsuper2020@gmail.com)

---

## 📂 Folder Structure

```
src/
├── assets/                # Static assets (e.g., logos)
├── components/            # Reusable UI components
│   ├── button/            # Social sign-in button
│   └── common/            # Input components for email/password
├── context/               # Global auth context (using React Context API)
├── pages/                 # Page-level components (Dashboard, SignIn, SignUp, etc.)
├── routes/                # Route definitions and protected route wrapper
├── utils/                 # Form validators
├── App.jsx                # Main component
├── main.jsx               # App entry point
├── index.css              # Tailwind and global styles
└── SupaBaseClient.js      # Supabase client setup
```

---

## 🛠️ Features

### ✅ Authentication Features

* 🔐 **Email & Password Sign Up / Sign In**
* 🌐 **OAuth Sign-In with Google & GitHub**
* 🔄 **Persistent Sessions**
* 🚪 **Sign-Out & Redirect**

### 🔒 Protected Routing

* Pages like `/dashboard` are protected using custom `PrivateRoute`.

### 🌟 User Dashboard

* 👤 Profile Overview
* 🕵️ Security Insights
<!-- * 📊 Recent Activity Log -->
<!-- * 🎛 Toggleable Settings (2FA, Notifications) -->

### 💡 Input Validations

* Email & password validated using custom logic.
* Error messages handled gracefully via `react-hot-toast`.

---

## 🧪 Tech Stack

* ⚛ **React.js**
* 🦾 **Supabase Auth**
* 🎨 **TailwindCSS**
* 🧠 **React Context API**
* 🔔 **react-hot-toast**
* 🧭 **React Router v6**
* 🌐 **OAuth (Google & GitHub)**

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/supabase-auth-react.git
cd supabase-auth-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

* Go to [Supabase](https://supabase.com/), create a new project.
* In `SupaBaseClient.js`, configure your `SUPABASE_URL` and `SUPABASE_ANON_KEY`.

```js
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient("https://xyzcompany.supabase.co", "public-anon-key");
```

* Enable **Email Auth**, **Google**, and **GitHub** OAuth providers in your Supabase project settings.

### 4. Run the App

```bash
npm run dev
```

> App will be available at: `http://localhost:5173`

---

## 🧩 Pages Overview

| Page         | Route        | Description                               |
| ------------ | ------------ | ----------------------------------------- |
| 🏠 Home      | `/`          | Landing page with CTA & feature cards     |
| 🔐 Sign In   | `/signin`    | Email/password & OAuth sign-in options    |
| 🆕 Sign Up   | `/signup`    | Register a new user via Supabase          |
| 📊 Dashboard | `/dashboard` | Protected, user-specific stats  |
| 🚫 Not Found | `*`          | Custom 404 page                           |

---

## 📸 Dashboard Preview

<!-- * Security Overview with animated progress bar -->
* Profile Info 
<!-- * Activity Logs with location/device -->
<!-- * Toggleable 2FA & Notifications -->

---

## 🙌 Credits

* Supabase Auth Docs
* Lucide React Icons
* Tailwind UI inspiration

---

## 🧾 License

This project is open-source and free to use under the **MIT License**.


