# Game Development Hub

> **MERN portfolio & blog for indie game projects – now *one‑click deployable* on Render.**

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/AntonioIndindoli/CompanyWebsite_Production)

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Local Development](#local-development)

  * [Prerequisites](#prerequisites)
  * [Run Locally](#run-locally)
* [🚀 Deploying to Render](#-deploying-to-render)

  * [Option A – Single Express + Static](#optiona)
  * [Option B – Two Services (API + Static Site)](#optionb)
  * [render.yaml (one‑click blueprint)](#renderyaml-oneclick-blueprint)
* [Project Structure](#project-structure)
* [Environment Variables](#environment-variables)

---

## Features

* **Showcase Projects** – highlight releases such as *The Backrooms: Unseen Tapes*.
* **Blog** – share dev logs and release notes.
* **Role‑playing Web Game** – engage visitors with an interactive mini‑game.
* **Responsive Design** – mobile‑first, looks great on any screen.

---

## Tech Stack

| Layer        | Choice                           | Notes                          |
| ------------ | -------------------------------- | ------------------------------ |
| **Database** | MongoDB (Atlas or Render Add‑On) |                                |
| **Backend**  | Express + Node.js (≥ 18 LTS)     | JWT auth, REST API             |
| **Frontend** | React (CRA v5)                   | Built to static files for prod |
| **Hosting**  | **Render**                       | Free HTTPS, autoscaling        |

> Legacy tools like PM2 / Caddy were replaced by Render’s managed runtime and CDN.

---

## Local Development

### Prerequisites

* **Node.js** 18 LTS (or 20).
* **npm** (comes with Node) or **pnpm**.
* **MongoDB** local *or* Atlas URI.
* **Git**.

### Run Locally

```bash
# 1. Clone
$ git clone https://github.com/yourusername/gamedev-company-website.git
$ cd gamedev-company-website

# 2. Install deps
$ npm install                  # installs root + workspaces

# 3. Environment
$ cp .env.example .env         # edit values

# 4. Dev mode (concurrently)
$ npm run dev                  # runs backend on :5000 & CRA on :3000
```

---

## 🚀 Deploying to Render

There are two common layouts; choose the one that matches your repo.

### <a name="optiona"></a>Option A – Single Express + Static

If your **backend serves the built React files**, keep everything in **one Web Service**.

| Setting            | Value                                                                                |
| ------------------ | ------------------------------------------------------------------------------------ |
| **Type**           | Web Service                                                                          |
| **Root Directory** | `/`                                                                                  |
| **Build Command**  | `npm install && npm run build`                                                       |
| **Start Command**  | `node backend/server.js` (or the file where you call `app.listen(process.env.PORT)`) |
| **Env Vars**       | see [below](#environment-variables)                                                  |

`server.js` should contain something like:

```js
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
```

Render automatically assigns `$PORT` and health‑checks that port.

---

### <a name="optionb"></a>Option B – Two Services (API + Static Site)

> Keep the API and React client as **separate Render services**. Perfect when you want the React bundle on Render’s global CDN and an API that can scale independently.

#### 1. Deploy the Backend (Node/Express)

| Field              | Value            |
| ------------------ | ---------------- |
| **Type**           | Web Service      |
| **Root Directory** | `backend`        |
| **Build Command**  | `npm install`    |
| **Start Command**  | `node server.js` |

`server.js` already calls `app.listen(process.env.PORT)` so no extra flags are needed.

Add any secrets under **Environment → Add Secret Variable**, for example:

```env
DB_URL=mongodb+srv://<user>:<pass>@cluster.mongodb.net/db
TOKEN_SECRET=<32‑char‑random‑secret>
```

Render will deploy the service and give you a URL like `https://<backend-app>.onrender.com`.

#### 2. Deploy the Frontend (React)

| Field                    | Value                                                  |
| ------------------------ | ------------------------------------------------------ |
| **Type**                 | Static Site                                            |
| **Root Directory**       | `frontend`                                             |
| **Build Command**        | `npm install && npm run build`                         |
| **Publish Directory**    | `build`                                                |
| **Environment Variable** | `REACT_APP_API_URL=https://<backend-app>.onrender.com` |

Render runs the build, pushes the `build` folder to its CDN, and serves it at `https://<frontend-site>.onrender.com`.

#### 3. Point React API calls at Render

Ensure every fetch/axios call uses `process.env.REACT_APP_API_URL`.
For example, in `src/api.js`:

```js
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
```

After redeploying the front‑end with the correct variable, all requests will hit your Render API.

**Result:** Two services, both auto‑redeploying on every push to `main`: the Static Site is cached globally for speed, while the Web Service scales the Node API independently.

### <a name="renderyaml-oneclick-blueprint"></a>render.yaml (one-click blueprint)></a>render.yaml (one‑click blueprint)

Commit this file at repo root to let visitors deploy with the ✨ button above.

```yaml
services:
  - name: api
    type: web
    runtime: node
    rootDir: backend
    buildCommand: "npm install"
    startCommand: "node server.js"
    envVars:
      - key: MONGODB_URI
        sync: false        # filled in dashboard or from secret store
      - key: TOKEN_SECRET
        sync: false
      - key: NODE_VERSION
        value: "20.15.0"

  - name: client
    type: static
    rootDir: frontend
    buildCommand: "npm install && npm run build"
    staticPublishPath: build
    envVars:
      - key: REACT_APP_API_URL
        value: "https://api.onrender.com"
```

> **Tip:** If you add a Render‑provided MongoDB add‑on, the `MONGODB_URI` env var is created automatically.

---

## Project Structure

```
.
├── backend/              # Express API
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/             # React app (CRA)
│   ├── src/
│   └── public/
├── render.yaml           # Render blueprint
└── README.md
```

---

## Environment Variables

| Key                 | Purpose                  | Example                                               |
| ------------------- | ------------------------ | ----------------------------------------------------- |
| `MONGODB_URI`       | Mongo connection string  | `mongodb+srv://<user>:<pass>@cluster0.mongodb.net/db` |
| `TOKEN_SECRET`      | JWT signing secret       | *(generate 32+ random chars)*                         |
| `REACT_APP_API_URL` | Front‑end → API base URL | `https://api.onrender.com`                            |
| `NODE_VERSION`      | Node runtime version     | `20.15.0`                                             |

> Secrets **must not** be committed. Render’s *Environment → Add Secret Vars* UI keeps them safe.

---

**Happy deploying & game‑making!**
