#  REST Countries API with Color Theme Switcher

A responsive and interactive web application built with **React**, integrating the [REST Countries API](https://restcountries.com/). This app allows users to search, filter, and explore detailed information about countries worldwide  with a light/dark mode toggle.

---

##  Features

- **Search** for countries by name with icon-enhanced input.
- **Filter** by region (Africa, Americas, Asia, Europe, Oceania).
- **View details** about each country: population, region, capital, and borders.
- **Navigate** through border countries.
- **Toggle light/dark mode** for a modern UI experience.
- **Responsive** layout for mobile, tablet, and desktop.

---

## Project Structure
```
src/
├── components/
│   ├── CountryCard.jsx
│   ├── Navbar.jsx
│   └── SearchFilter.jsx
├── context/
│   └── ThemeContext.jsx
├── pages/
│   ├── Home.jsx
│   └── CountryDetails.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Live Demo 

[REST Countries API ](https://haida-rest-countries-explorer.netlify.app/)

---

##  Tech Stack

- React + Vite
- Tailwind CSS
- React Router DOM
- React Icons
- REST Countries API

---

## 1. Clone the repository
```bash
git clone https://github.com/HaidaMarese/rest-countries-react.git
cd rest-countries-app
npm install
npm run dev
```

## License
This project is licensed under the MIT License. Challenge inspired by Frontend Mentor.
