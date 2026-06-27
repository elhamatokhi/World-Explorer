# 🌍 World Explorer

World Explorer is a **Next.js** application that allows users to explore countries around the world using real-time data from the **REST Countries API**. Users can browse countries, search by name, filter by region, and view detailed information about each country.

---

## ✨ Features

- App Router
- File-based routing
- Shared layout
- Dynamic routes
- Server Components
- Client Components
- Real API data fetching
- Static rendering and caching
- Dynamic rendering
- Search functionality
- Region filtering
- Dynamic metadata for country pages

---

## 🛠️ Technologies Used

- Next.js (App Router)
- React
- Tailwind CSS
- JavaScript
- REST Countries API v5

---

## 🌐 API Used

This project uses the **REST Countries API v5** to retrieve country information such as:

- Country names
- Flags
- Capitals
- Population
- Region
- Google Maps links

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd world-explorer
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add your API key:

```env
API_KEY=your_api_key_here
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
app/
└──layout.js
  page.js
└──about/
    page.js
└── countries/
    page.js
    [code]/
      page.js
└──search/
    page.js

components/
├── Navbar.jsx
├── Footer.jsx
├── CountryCard.jsx
└── CountrySearch.jsx
```

## 📄 License

This project was created for learning purposes.