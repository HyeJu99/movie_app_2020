import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        const { state } = location;
        console.log(state);
        if (location.state) {
            return (
                <div className="movie">
                    <img src={state.poster} alt={state.title} title={state.title} />
                    <div className="movie__data">
                        <h3 className="movie__title">{state.title}</h3>
                        <h5 className="movie_year">
                            {state.year}, {state.rating}/10.0
                        </h5>
                        <ul className="movie__genres">
                            {state.genres.map((genre, index) => {
                                return (
                                    <li key={index} className="movie__genre">
                                        {genre}
                                    </li>
                                );
                            })}
                        </ul>
                        <p className="movie__summary">{state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
