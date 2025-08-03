# 🏏 Gully Cricket – The Ultimate Street Cricket Scoring App

**Gully Cricket** is a lightweight, powerful, and mobile-friendly scoring web app for casual and tournament-style gully cricket matches. No downloads. No logins. Just pure cricket.

Built with React and TailwindCSS, this app is designed to bring international-level scorekeeping to your street-side battles, rooftop duels, and backyard tournaments — without the complexity.

---

## 🚀 Features

- ⚡ Start a match instantly and generate a match code
- 📺 View live match updates via code (no login needed)
- 🔁 Switch host mid-game (great for innings change or rotating scorers)
- 🎲 Toss simulator with team input and decision
- 📋 Match setup with:
  - Team names, player count, overs
  - Player roles (Captain, WK) and jersey numbers
  - Customizable rules (wide, no-ball, free hit, powerplay, etc.)
  - Bowler restrictions (e.g., 3 overs max, 2 players allowed)
  - Super Over toggle
- 🔄 Auto strike rotation and auto-end innings after max overs
- ⬅️ Undo last ball anytime
- 🧠 AI-generated commentary (toggle option)
- 📊 Optional pitch & ground tracker (for visuals + smarter commentary)
- 📤 Match summary sharing via WhatsApp or screenshot (coming soon)
- ✅ Offline-friendly (PWA-ready)

---

## 🧱 Tech Stack

- React + TailwindCSS
- React Router for navigation
- Context API for match state
- Hosting: GitHub Pages / Netlify (frontend only)

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/gully-cricket.git
cd gully-cricket
npm install
npm run dev
