# 🚀 FUTURE_FS_01 — Personal Portfolio Website

> An aesthetic, responsive, and modern personal portfolio website built as Task 1 for the Future Interns Full Stack Web Development Internship.

---

## ✨ Features

- 🎨 **Vibrant Theme & Styling**: Modern purple-themed UI powered by smooth gradient accents & tailwind styling.
- 🌙 **Dark / Light Mode Toggle**: Persistent theme toggling powered by React state & localStorage.
- 📱 **100% Fully Responsive**: Seamlessly scales across mobile screens, tablets, and desktop displays.
- 🧭 **Smooth Navigation**: Frictionless intra-page scrolling across all core section anchors.
- 💼 **Interactive Projects Showcase**: Dedicated project cards with direct GitHub & live demo links.
- 📄 **Integrated Resume Viewer**: Quick online PDF preview with a direct download button.
- 📬 **Functional Contact Form & Links**: Dynamic messaging powered by EmailJS + quick email options.
- 🔍 **SEO & OpenGraph Optimized**: Structured meta tags for clean social media previews.

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React.js (Scaffolded via Vite)
- 🎨 Tailwind CSS
- 🧩 Lucide React & React Icons

### Backend
- ✉️ EmailJS (`@emailjs/browser` — Serverless client-side email delivery)

### Database & Tools
- 🐙 Git & GitHub
- 📦 npm

---

## 🚀 Live Demo & Deployment

- 🔺 **Frontend Live App (Vercel)**: [https://future-fs-01-three-jet.vercel.app](https://future-fs-01-three-jet.vercel.app)
- 📂 **GitHub Repository**: [https://github.com/gloriasemyol/FUTURE_FS_01](https://github.com/gloriasemyol/FUTURE_FS_01)

---

## 📁 Project Structure

```text
FUTURE_FS_01/
├── public/              # Static assets & favicon
├── src/
│   ├── assets/          # Profile photo, resume PDF, images
│   ├── components/      # Navbar, Hero, About, Skills, Projects, Resume, Contact, Footer
│   ├── App.jsx          # Core App Component
│   ├── main.jsx         # React Entry Point
│   └── index.css        # Global Tailwind Directives
├── .env                 # Environment variables (Git-ignored)
├── index.html           # HTML Entry & Meta tags
├── package.json         # Dependencies & scripts
└── README.md            # Documentation
```

---

## 💻 Local Installation & Setup

### 📋 Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- EmailJS Account (Service ID, Template ID, Public Key)

### 1. Clone the repository
```bash
git clone https://github.com/gloriasemyol/FUTURE_FS_01.git
cd FUTURE_FS_01
```

### 2. Setup Frontend
```bash
npm install
```

Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Start the Vite development server:
```bash
npm run dev
```

Open `http://localhost:5173` in your browser! 🚀

---

## 🌐 Production Deployment Steps

### 🔺 Frontend Deployment (Vercel)
1. Create a new Project on Vercel and import your repository.
2. Framework Preset: `Vite`
3. Root Directory: `./`
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Set Environment Variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

---

## ⚙️ Environment Variables

| Variable | Location | Description |
| :--- | :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | .env / Vercel | EmailJS Service ID for contact form |
| `VITE_EMAILJS_TEMPLATE_ID` | .env / Vercel | EmailJS Template ID for message formatting |
| `VITE_EMAILJS_PUBLIC_KEY` | .env / Vercel | EmailJS Public Key for client-side API calls |

---

## 📝 License

Distributed under the MIT License.
```
