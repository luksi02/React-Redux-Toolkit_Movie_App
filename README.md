**Movie App Documentation**

This is the documentation for the Movie App repository, which is a JavaScript React application with Redux Toolkit. The Movie App allows users to search for movies and TV shows, view details about them, and manage a list of favorite movies and shows.

**Table of Contents**

1 Installation
2 Usage
3 Redux Slice
4 API Integration
5 Available Actions
6 Selectors

**Installation**
To install and run the Movie App on your local machine, follow these steps:

Clone the repository:
git clone <repository-url>

Navigate to the project directory:

cd movie-app

Install the dependencies:

npm install

Start the development server:
npm start

The application will be accessible at http://localhost:3000.

**Usage**
Once the Movie App is running, you can use the following features:

Search for movies and TV shows by entering a term in the search bar.
Click on a movie or show to view more details.
Add movies or shows to your favorites list.
Remove movies or shows from your favorites list.
Redux Slice
The Redux slice in this application handles the state management for movies and TV shows. It provides actions to fetch movies, fetch TV shows, fetch movie/show details, and manage the selected movie or show. The slice is defined in the file src/redux/movieSlice.js.

The initial state of the movie slice is defined as follows:

javascript
Copy code
const initialState = {
  movies: {},
  series: {},
  selectedMovieOrShow: {},
};
The state includes a movies object, a series object, and a selectedMovieOrShow object.

The slice defines the following actions:

addMovies: Updates the state with a new set of movies.
removeSelectedMovieOrShow: Clears the selectedMovieOrShow object from the state.
API Integration
The Movie App integrates with an external API to fetch movie and TV show data. The API used is the MovieAPI, which requires an API key.

The API key is stored in the src/common/APIs/MovieAPIKey.js file. Make sure to replace the placeholder APIKey with your actual API key before using the application.

**Available Actions**
The Movie App defines several asynchronous actions using createAsyncThunk from Redux Toolkit. These actions are used to fetch movies, fetch TV shows, and fetch movie/show details. The actions are defined in the src/redux/movieSlice.js file.

The available actions are:

fetchAsyncMovies: Fetches movies based on a search term.
fetchAsyncShows: Fetches TV shows based on a search term.
fetchAsyncMovieOrShowDetail: Fetches details of a specific movie or TV show based on its ID.
The movie slice also includes additional actions:

addMovies: Updates the state with a new set of movies.
removeSelectedMovieOrShow: Clears the selectedMovieOrShow object from the state.

**Selectors**
The Movie App provides selectors to access the movie and TV show data from the Redux store. The selectors are defined in the src/redux/movieSlice.js file.

The available selectors are:

getAllMovies: Retrieves all movies from the state.
getAllShows: Retrieves all TV shows from the state.
getSelectedMovieOrShow: Retrieves the selected movie or show from the state.
These selectors can be used in React components to access the relevant data from the Redux store.
