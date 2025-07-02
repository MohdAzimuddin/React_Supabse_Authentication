# ⚡ Supabase Authentication System – React 19 + TailwindCSS

A clean, modern, and production-ready authentication system built with **React 19**, **Supabase**, **TailwindCSS**, and **React Context API**.

> ✅ Supports secure email/password login, social logins (Google/GitHub), protected routing, contextual auth state, user session visualization, and search-based dashboard filtering.

> 🔗 **Live Demo**: [https://react-supabse-authentication.vercel.app](https://react-supabse-authentication.vercel.app)

---

## 🚀 Features

### 🔐 Authentication

* ✅ Email + Password sign-up & login
* 🌐 Social login with **Google** and **GitHub**
* 🔁 Auto session restoration on refresh
* 🔄 Realtime session change detection
* 🚪 Secure logout with session invalidation

### 🔒 Route Protection

* Protected dashboard using a **custom `PrivateRoute`** HOC
* Non-authenticated users are redirected to `/signin`

### 📊 Dashboard

* 👤 User data (email, UID, creation date, provider, role)
* 🔑 Session data (token, expiry)
* 🔎 Smart search filtering for cards
* 🕒 Real-time clock display
* 🖼️ Profile picture from OAuth provider

### 💡 Form Validation

* 🧠 Custom validators for email & password
* ⚠️ Inline error messaging
* 🔔 Feedback using `react-hot-toast`

### 🧼 UI/UX

* ✨ Clean component structure
* 🖼️ Responsive and mobile-friendly design
* 🧩 Modular components for cards, forms, navbar
* 🎨 Consistent Tailwind theme
* 🖱️ Smooth hover and transition effects

---

## 📂 Folder Structure

```
src/
├── assets/                 # Static files (e.g., logos)
├── components/
│   ├── button/             # OAuth sign-in buttons
│   ├── Card/               # Session and user data cards
│   ├── common/             # Form inputs (email, password)
│   └── Navbar/             # SearchBar, ProfileImage
├── context/
│   └── AuthContext.jsx     # Global authentication context
├── layout/
│   └── Layout.jsx          # Optional shared layout
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Signin.jsx          # Login screen
│   ├── SignUp.jsx          # Registration screen
│   ├── Dashboard.jsx       # Protected dashboard
│   └── NotFound.jsx        # 404 fallback
├── routes/
│   ├── PrivateRoute.jsx    # Route protection logic
│   └── router.jsx          # App routes
├── utils/
│   ├── format.js           # Date formatting & helpers
│   ├── userData.js         # Extract session/user data
│   └── validators.js       # Form validation logic
├── SupaBaseClient.js       # Supabase setup
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Tailwind & base styles
```

---

## 🧠 Auth System Architecture

This project uses a **centralized AuthContext provider** that:

* Initializes the Supabase session on load
* Subscribes to auth state changes via `onAuthStateChange`
* Provides methods: `signUpNewUser`, `signInUser`, `signOutUser`, `signInWithProvider`
* Stores session & loading state across components

Access auth via:

```js
const { session, signInUser, signOutUser, signInWithProvider } = userAuth();
```

Supabase client is configured once in `SupaBaseClient.js`.

```js
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```

---

## 🔐 OAuth Integration

* ✅ Google
* ✅ GitHub

These providers are configured inside Supabase:

* Go to **Authentication > Providers**
* Enable and configure redirect URLs (e.g., `/dashboard`)
* Sign-in is handled using Supabase’s OAuth:

```js
signInWithOAuth({ provider: "google" });
```

---

## 🧪 Tech Stack

| Tool / Library    | Purpose                       |
| ----------------- | ----------------------------- |
| React 19          | Component-based UI            |
| Supabase          | Backend-as-a-service (BaaS)   |
| Tailwind CSS      | Utility-first CSS styling     |
| React Router v6   | Client-side routing           |
| React Context API | Global state for auth/session |
| Lucide React      | Modern icon set               |
| react-hot-toast   | Notifications and alerts      |
| date-fns          | Date formatting               |

---

## 🛠️ Setup & Installation

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/supabase-auth-react.git
cd supabase-auth-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Supabase

* Create a project on [supabase.com](https://supabase.com)
* Enable:

  * Email/Password Auth
  * Google Auth
  * GitHub Auth
* In your Supabase project, go to Project Settings → API → Get:

  * `SUPABASE_URL`
  * `SUPABASE_ANON_KEY`

Update `SupaBaseClient.js`:

```js
export const supabase = createClient("https://xyzproject.supabase.co", "public-anon-key");
```

### 4. Run Locally

```bash
npm run dev
```

Project runs on: [http://localhost:5173](http://localhost:5173)

---

## 🧩 Key Pages

| Route        | Component | Description                            |
| ------------ | --------- | -------------------------------------- |
| `/`          | Home      | Welcome screen, feature cards, CTA     |
| `/signin`    | Signin    | Email/password login + OAuth buttons   |
| `/signup`    | SignUp    | Secure registration                    |
| `/dashboard` | Dashboard | Protected route with session/user data |
| `*`          | NotFound  | 404 fallback with back navigation      |

---

## 📸 Dashboard Preview

| Section         | Description                         |
| --------------- | ----------------------------------- |
| 👤 User Info    | Shows email, UID, joined date, role |
| 🔐 Session Info | Token + expiration                  |
| 🔎 Search       | Filters info cards live             |
| 🕒 Clock        | Current time (real-time interval)   |
| 👋 Sign Out     | Clears session & redirects to home  |

---

## 🙌 Credits

* [Supabase Docs](https://supabase.com/docs)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide Icons](https://lucide.dev/)
* [react-hot-toast](https://react-hot-toast.com)

---

## 📬 Contact

**Author**: [sfsuper2020@gmail.com](mailto:sfsuper2020@gmail.com)

---


