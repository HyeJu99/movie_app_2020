import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [], // 데이터가 아직 없더라도, 미리 정의해두는 것을 권장함
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <div>
                {isLoading
                    ? "Loading..."
                    : movies.map((movie) => (
                          <Movie
                              key={movie.id}
                              id={movie.id}
                              year={movie.year}
                              title={movie.title}
                              summary={movie.summary}
                              poster={movie.medium_cover_image}
                              rating={movie.rating}
                          />
                      ))}
            </div>
        );
    }
}

export default App;
