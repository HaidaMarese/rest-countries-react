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

##  Reflection Document
Building the REST Countries API project helped me improve my skills in React, Tailwind CSS, and API integration. I designed a clean, responsive layout with a search bar, region filter, and theme toggle (light/dark mode). Components like Navbar, SearchFilter, and CountryCard were created for better structure and reusability.

A key challenge was getting the dark mode to work correctly. At first, toggling the theme had no visible effect. I fixed this by updating the Tailwind configuration to use darkMode: 'class', applying dark: utility classes in components, and syncing theme preference with localStorage. This allowed the app to remember the selected theme across refreshes.

Styling the search input with an icon and maintaining a consistent design across screen sizes also took some iteration. Once resolved, the app looked clean and functional.

In the future, I’d like to add a country detail page, loading indicators, and smooth transitions between themes. This project gave me great hands-on experience with context, styling, and API handling.

## License
This project is licensed under the MIT License. Challenge inspired by Frontend Mentor.
