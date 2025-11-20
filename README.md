## Tech Stack

| Layer        | Choice                           | Notes                          |
| ------------ | -------------------------------- | ------------------------------ |
| **Frontend** | React                   | Built to static files for prod |
| **Hosting**  | **Render**                       | Free HTTPS, autoscaling        |

---

## Local Development

### Prerequisites

* **Node.js** 18 LTS (or 20).
* **npm** (comes with Node) 
* **Git**.

## Deploying to Render

| Field                    | Value                                                  |
| ------------------------ | ------------------------------------------------------ |
| **Type**                 | Static Site                                            |
| **Build Command**        | `npm install && npm run build`                         |
| **Publish Directory**    | `build`                                                |
| **Environment Variable** | `REACT_APP_API_URL=https://<backend-app>.onrender.com` |

Render runs the build, pushes the `build` folder to its CDN, and serves it at `https://<frontend-site>.onrender.com`.

