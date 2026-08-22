# 🌍 VishvYatri — Explore the World, Your Way ✈️

VishvYatri is a personalized, multi-city travel planning platform built for the **GlobeTrotter** hackathon problem statement. It empowers travelers to dream, design, and organize trips end-to-end — from discovering cities and activities to building day-wise itineraries and tracking budgets — all in one intuitive, visually engaging app.

## 🚀 Live Demo

[https://vishvyatri.vercel.app](https://vishvyatri.vercel.app) <!-- replace with your actual deployed link -->

## 📌 Problem Statement

Traditional trip planning is scattered across spreadsheets, notes, and multiple apps. VishvYatri solves this by giving travelers a single, structured platform to plan multi-city trips, assign dates and activities, estimate costs, and visualize their journey — while making the experience colorful, interactive, and easy to share.

## ✨ Features

- **Authentication** — Simple login/signup flow
- **Dashboard** — Personalized home screen with quick trip actions and destination inspiration
- **Create Trip** — Start a new trip with name, dates, and description
- **My Trips** — View and manage all created trips in one place
- **City Search** — Discover destinations with cost and popularity info
- **Itinerary Builder** *(in progress)* — Add stops, assign activities, and structure day-wise plans
- **Budget Breakdown** *(in progress)* — Visual cost estimates across transport, stay, food, and activities

## 🛠️ Tech Stack

**Frontend:** React (Vite) + React Router DOM
**Backend:** Node.js + Express
**Database:** MongoDB (Atlas)
**Deployment:** Vercel

## 📁 Project Structure

```
VishvYatri/
├── client/               # React frontend
│   └── src/
│       ├── pages/        # Screen-level components (Login, Dashboard, etc.)
│       ├── components/   # Reusable UI components
│       └── assets/       # Images and static files
├── server/               # Express backend
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── controllers/      # Route logic
│   └── index.js          # Server entry point
└── README.md
```

## ⚙️ Getting Started Locally

**1. Clone the repo**
```bash
git clone https://github.com/yatridave/VishvYatri.git
cd VishvYatri
```

**2. Set up the frontend**
```bash
cd client
npm install
npm run dev
```
Runs on `http://localhost:5173`

**3. Set up the backend**
```bash
cd server
npm install
```
Create a `.env` file in `server/`:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Then run:
```bash
npm run dev
```
Runs on `http://localhost:5000`

## 🎯 Future Scope

- Full Itinerary Builder with drag-and-drop day planning
- Calendar/timeline visualization of trips
- Public shareable itinerary links
- Community tab for shared travel experiences
- Admin analytics dashboard

## 👤 Team

Built during a hackathon by [Your Name / Team Name].

---
*VishvYatri — because every journey deserves a plan as exciting as the destination.*
