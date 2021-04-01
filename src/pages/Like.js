import React from "react";
import MovieListBlock from "../components/MovieListBlock";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  contents: {
    margin: "1rem",
    display: "inline"
  }
}));

function Like() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [movieData, setMovieData] = React.useState([]);
  const [movies, setMovies] = React.useState([]);

  const modalOpen = useSelector(state => state.modalReducer.modalOpen);
  const likelist = useSelector(state => state.LikelistReducer.likelist);
  const allMoviesData = useSelector(
    state => state.getMoviesReducer.allMoviesData
  );

  React.useEffect(() => {
    setMovies(allMoviesData.filter(movie => likelist.includes(movie.id)));
  }, []);

  React.useEffect(() => {
    let newData = movieData.filter(movie => likelist.includes(movie.id));
    setMovieData(newData);
  }, [likelist]);

  React.useEffect(() => {
    setMovieData(movies);
  }, [movies]);

  return (
    <div className={classes.contents}>
      <MovieListBlock movies={movieData} modalOpen={modalOpen} />
    </div>
  );
}

export default Like;
