# 🎬 Movie Search App

A modern, responsive React application for searching movies, TV shows, and episodes using the OMDb API (Open Movie Database). Built with React, Vite, and modern web technologies.

## ✨ Features

- **🔍 Real-time Search**: Search for movies, TV shows, and episodes with debounced input
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎭 Movie Details**: Click on any movie to view detailed information including plot, cast, ratings, and more
- **♾️ Infinite Scroll**: Load more results with pagination support
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **🎨 Modern UI**: Beautiful gradient design with smooth animations and transitions
- **🔄 Loading States**: Elegant loading spinners and error handling
- **🌐 API Integration**: Seamless integration with OMDb API

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- OMDb API key (free registration required)

### 1. Get Your OMDb API Key

1. Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Choose the FREE plan (1,000 daily requests)
3. Fill out the form with your email address
4. Check your email for the API key
5. Activate your key by clicking the link in the email

### 2. Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd movie-listing
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create environment file:
   ```bash
   cp .env.example .env
   ```

5. Add your OMDb API key to the `.env` file:
   ```env
   VITE_OMDB_API_KEY=your_actual_api_key_here
   ```

### 3. Running the Application

Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

### 4. Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### 5. Deploying to GitHub Pages

Deploy the application to GitHub Pages:
```bash
./deploy.sh
```

Or manually:
```bash
npm run deploy
```

The app will be available at: https://dariogeorge21.github.io/react-movie-lister/

## 🏗️ Project Structure

```
movie-listing/
├── public/
├── src/
│   ├── components/
│   │   ├── ErrorMessage.jsx      # Error handling component
│   │   ├── LoadingSpinner.jsx    # Loading state component
│   │   ├── MovieCard.jsx         # Individual movie card
│   │   ├── MovieDetails.jsx      # Movie details modal
│   │   ├── MovieList.jsx         # Movie grid container
│   │   └── SearchBar.jsx         # Search input component
│   ├── hooks/
│   │   ├── useDebounce.js        # Debounce hook for search
│   │   └── useMovieSearch.js     # Movie search logic hook
│   ├── services/
│   │   └── omdbApi.js           # OMDb API integration
│   ├── App.jsx                  # Main application component
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── .env.example                # Environment variables template
├── index.html                  # HTML template
├── package.json               # Project dependencies
├── README.md                  # This file
└── vite.config.js            # Vite configuration
```

## 🎯 Usage

1. **Search Movies**: Type in the search bar to find movies, TV shows, or episodes
2. **View Results**: Browse through the responsive grid of search results
3. **Movie Details**: Click on any movie card to view detailed information
4. **Load More**: Use the "Load More" button to see additional results
5. **Mobile Friendly**: The app works great on all device sizes

## 🔧 API Integration

The app uses the OMDb API with the following endpoints:

- **Search**: `http://www.omdbapi.com/?apikey={key}&s={search}&page={page}`
- **Details**: `http://www.omdbapi.com/?apikey={key}&i={imdbID}&plot=full`

### API Features Used:
- Movie/TV show search by title
- Pagination support
- Detailed movie information
- Multiple rating sources (IMDb, Rotten Tomatoes, Metacritic)
- Full plot descriptions
- Cast and crew information

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme with purple gradients
- **Responsive Grid**: Automatically adjusts to screen size
- **Smooth Animations**: Hover effects and transitions
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages
- **Modal Design**: Elegant movie details overlay

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OMDB_API_KEY` | Your OMDb API key | Yes |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [OMDb API](http://www.omdbapi.com/) for providing the movie data
- [React](https://reactjs.org/) for the UI framework
- [Vite](https://vitejs.dev/) for the build tool

## 🐛 Troubleshooting

### Common Issues:

1. **"API key is required" error**
   - Make sure you've created a `.env` file
   - Verify your API key is correct
   - Ensure the key is activated via email

2. **No search results**
   - Check your internet connection
   - Verify the API key is working
   - Try different search terms

3. **Build errors**
   - Delete `node_modules` and run `npm install` again
   - Check Node.js version compatibility

## 📞 Support

If you encounter any issues or have questions, please check the troubleshooting section above or create an issue in the repository.

---

**Happy movie searching! 🍿**
