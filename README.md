# 🎬 Movie Explorer

**Live Demo:** [Movie Explorer](https://movie-explorer-henna-pi.vercel.app/)

Movie Explorer is a React application that allows users to search for movies and view detailed information about them using the [OMDb API](https://www.omdbapi.com/).

The application was built as a React project to practice working with APIs, state management, components, conditional rendering, and responsive CSS.

## ✨ Features

- Search for movies by title
- Display movie search results with posters and release years
- View detailed movie information
- Display IMDb ratings
- Show movie genre, runtime, director, actors, and plot
- Loading state while searching
- Error handling for unsuccessful searches
- Back button to return to search results
- Local fallback image when a movie poster is unavailable
- Responsive layout for desktop, tablet, and mobile screens

## 🛠️ Technologies

- React
- Vite
- JavaScript
- CSS
- OMDb API
- Git & GitHub

## 🔑 API Setup

This application uses the [OMDb API](https://www.omdbapi.com/apikey.aspx).

You will need an OMDb API key to run the application.

1. Visit [OMDb API](https://www.omdbapi.com/apikey.aspx) and request an API key.
2. Create a `.env` file in the root of the project.
3. Add your API key using the following format:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

The `.env` file is included in `.gitignore` so the API key is not committed to GitHub.

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/lynmora21/movie-explorer.git
```

### 2. Navigate into the project

```bash
cd movie-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Add your API key

Create a `.env` file in the project root:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

### 5. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🧪 Testing

The application was manually tested through the following user flows:

- Searching for a movie
- Viewing search results
- Selecting a movie
- Viewing movie details
- Returning to the movie list
- Searching for a movie that does not exist
- Submitting an empty search
- Handling unavailable movie posters
- Testing the responsive layout

The project was also checked using:

```bash
git diff --check
npm run build
```

The production build completed successfully.

## 📁 Project Structure

```text
movie-explorer/
├── public/
│   └── no-poster.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── MovieList.jsx
│   │   └── SearchBar.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🎯 Project Goals

This project was created to practice building a React application that communicates with an external API and provides a complete user experience from searching for information to viewing detailed results.

Key React concepts demonstrated include:

- `useState`
- API requests with `fetch`
- Async/await
- Passing props between components
- Callback functions
- Conditional rendering
- Loading and error states
- Component-based architecture
- Responsive CSS