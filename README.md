# 🏢 Companies Directory — React Frontend

A responsive **React + Vite** web application that displays and filters company data.  
Built with **Tailwind CSS** for design and **React Hooks** for state management.

---

## 🚀 Features

✅ Responsive UI (Card/Table layout)  
✅ Filter by Name, Location, or Industry  
✅ Search Bar for quick lookup  
✅ Sorting (by Name or Founded Year)  
✅ Pagination (optional bonus)  
✅ Loading & Error states  
✅ Fetches data from a mock API (JSON file or backend endpoint)

---

## 🧱 Project Structure

companies-directory/
├─ public/
│ └─ data/
│ └─ companies.json # Mock data (API simulation)
├─ src/
│ ├─ components/
│ │ ├─ CompanyCard.jsx
│ │ ├─ Filters.jsx
│ │ └─ Loader.jsx
│ ├─ api.js # Fetch data logic
│ ├─ App.jsx # Main UI component
│ ├─ main.jsx # React entry
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ README.md

yaml
Copy code

---

## ⚙️ Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- React Hooks (useState, useEffect, useMemo)

**Mock API:**
- Local JSON file (`/public/data/companies.json`)  
  or  
- REST endpoint (`https://your-api-url/api/companies`)

---

## 🧩 Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<your-username>/companies-directory.git
cd companies-directory
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Run Development Server
bash
Copy code
npm run dev
App runs at → http://localhost:5173

🌐 Deployment on Netlify
🔧 Settings
Setting	Value
Base Directory	/ (leave blank)
Build Command	npm run build
Publish Directory	dist

📦 Manual Deploy
bash
Copy code
npm run build
Then drag & drop the dist/ folder into Netlify Drop.

🔗 Live Links (Example)
Type	URL
🌍 Frontend	https://companies-directory.netlify.app
💻 GitHub Repo	https://github.com/your-username/companies-directory



💡 Future Enhancements
Integrate live backend (Express / MongoDB)

Add CRUD operations

Use Context API or Redux

Dark mode toggle

👨‍💻 Author
Shashanth Royal
Frontend Developer | MERN Stack Enthusiast
📧 shashanth.chandu@gmail.com
