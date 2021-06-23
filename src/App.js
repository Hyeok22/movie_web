import React from 'react';
import axios from 'axios';
//import Split from 'split.js';
import Movie from "./Movies";
import SearchBar from "./SearchBar";
import "./App.css";

const API_MOVIES = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    renderMovies = (movie) => {
        return (
            <Movie
            key={movie.id}
            title={movie.title}
            poster={movie.medium_cover_image}
            year={movie.year}
            rating={movie.rating}
            genres={movie.genres}
            summary={movie.summary}
        />
        );
    }

    getMovieList = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get(API_MOVIES);

        this.setState({isLoading: false, movies});
    }

    async componentDidMount() {
        await this.getMovieList();
    }

    render() {
        const {isLoading, movies} = this.state;

        //Split(["header"],["main"]);

        return (
            <div className="container">
                <header className="header">
                    <SearchBar/>
                    {(isLoading) ? (
                        <div className="loader">
                            <span>Loading...</span>
                        </div>
                    ) : (
                        <div className="movies">
                            {movies.map(this.renderMovies)}
                        </div>
                    )}
                </header>
                <main className="main">
                    <section>section</section>
                    <aside>aside</aside>
                </main>
            </div>
        );
    }
}

export default App;