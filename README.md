<a name="readme-top"></a>

<div align="center">

# 🚀 Sardor — 3D Portfolio

### Full-Stack · DevOps · Cybersecurity · Samarkand, Uzbekistan 🇺🇿

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-915EFF?style=for-the-badge)](https://builtbysardor.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-builtbysardor-181717?style=for-the-badge&logo=github)](https://github.com/builtbysardor)
[![Made with React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js)](https://threejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-build-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)

</div>

---

## 🎬 Demo Video

> **Watch the full portfolio walkthrough:**

[![Portfolio Demo Video](https://img.shields.io/badge/▶_Watch_Demo-Live_Site-FF0000?style=for-the-badge&logo=googlechrome)](https://portfolio-mocha-seven-22.vercel.app)

> 📹 *To add a screen recording: upload a GIF to `.github/images/demo.gif` and replace the badge above with:*
> `![Demo](https://raw.githubusercontent.com/builtbysardor/Portfolio/main/.github/images/demo.gif)`

---

## 📸 Screenshots

### 🏠 Hero — Interactive 3D Computer Model
![Hero Section](.github/images/img_main.jpg)

> 💡 *Add more screenshots: upload images to `.github/images/` folder and embed them here.*

---

## ✨ Features

- 🖥️ **Interactive 3D computer model** — powered by Three.js & React Three Fiber
- 🌌 **Animated starfield background** — particle effects that respond to scroll
- 📜 **Vertical timeline** — work experience with smooth scroll animations
- 🎯 **Tilt effect cards** — projects & services with hover 3D tilt
- ⌨️ **Framer Motion animations** — throughout every section
- 📡 **EmailJS contact form** — sends emails directly from the browser
- 🌐 **3D Earth model** — on the contact section
- ⚡ **Vite** — blazing fast build & HMR
- 📱 **Fully responsive** — mobile, tablet, desktop

---

## 🗂️ Projects Featured

| # | Project | Stack | Description |
|---|---------|-------|-------------|
| 1 | **Nexus Pro** | Next.js · WebSockets · TypeScript | Real-time infrastructure monitoring dashboard |
| 2 | **SentinelLog v2** | FastAPI · Python · WebSockets | SOC dashboard — detects SSH brute-force, SQLi, DDoS |
| 3 | **InfraWatch** | Prometheus · Grafana · Docker | One-command full observability monitoring stack |
| 4 | **PhishGuard AI** | Python · FastAPI · Naive Bayes ML | 100% local phishing email detector |
| 5 | **Antivirus Pro** | Python · VirusTotal API · Radar | Enterprise cybersecurity dashboard |
| 6 | **CryptaVault** | Vanilla JS · Canvas API | Interactive Caesar & Vigenère cipher tool |

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Tailwind CSS |
| **3D / Animation** | Three.js, React Three Fiber, Drei, Framer Motion |
| **Build** | Vite, PostCSS |
| **Email** | EmailJS |
| **Deployment** | GitHub Pages |

---

## 📁 Folder Structure

```
Portfolio/
├── public/
│   └── desktop_pc/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── canvas/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── works.tsx
│   │   └── contact.tsx
│   ├── constants/
│   │   └── index.ts
│   └── app.tsx
├── index.html
└── vite.config.ts
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/builtbysardor/Portfolio.git
cd Portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev
# → http://localhost:5173
```

---

## 📬 EmailJS Setup

1. Go to [emailjs.com](https://emailjs.com) and create a free account
2. Create an **Email Service** and **Email Template**
3. Copy your `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`
4. Add them to `src/components/contact.tsx`

---

## 📦 Deploy

Every push to `main` auto-deploys via `.github/workflows/deploy.yml`:

```bash
git push origin main
# → https://builtbysardor.github.io/Portfolio/
```

---

## 🔗 Connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit-915EFF?style=for-the-badge)](https://portfolio-mocha-seven-22.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-builtbysardor-181717?style=for-the-badge&logo=github)](https://github.com/builtbysardor)

**Built with ❤️ by Sardor · Samarkand, Uzbekistan 🇺🇿**

⭐ *Star this repo if you liked it!*

</div>
