## Tech Stack

| Layer        | Choice                           | Notes                          |
| ------------ | -------------------------------- | ------------------------------ |
| **Frontend** | React (CRA v5)                   | Built to static files for prod |
| **Hosting**  | **Render**                       | Free HTTPS, autoscaling        |

---

## Local Development

### Prerequisites

* **Node.js** 18 LTS (or 20).
* **npm** (comes with Node) or **pnpm**.
* **MongoDB** local *or* Atlas URI.
* **Git**.

### Run Locally

```bash
# 1. Clone
$ git clone https://github.com/yourusername/gamedev-company-website.git
$ cd gamedev-company-website

# 2. Install dependencies
$ npm install

# 3. Start the app
$ npm start
```

---

## Deploying to Render

| Field                    | Value                                                  |
| ------------------------ | ------------------------------------------------------ |
| **Type**                 | Static Site                                            |
| **Build Command**        | `npm install && npm run build`                         |
| **Publish Directory**    | `build`                                                |
| **Environment Variable** | `REACT_APP_API_URL=https://<backend-app>.onrender.com` |

Render runs the build, pushes the `build` folder to its CDN, and serves it at `https://<frontend-site>.onrender.com`.

## Project Structure

```
.
├── src/
└── public/
└── README.md
```

---


## Unity WebGL Demo

The React app includes a route at `/unity-demo` that loads a Unity WebGL build from `public/unity_build/index.html`.

To add your own Unity project:

1. Build your game in Unity with the **WebGL** target.
2. Copy the generated files (typically the `Build/` folder, `TemplateData/` folder, and `index.html`) into `public/unity_build/` replacing the placeholder file.

Deployments will serve the same route for anyone visiting `/unity-demo`.
