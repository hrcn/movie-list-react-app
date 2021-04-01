import React from "react";
import MovieListBlock from "../components/MovieListBlock";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  contents: {
    margin: "1rem",
    display: "inline",
  },
}));

function Block() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [movieData, setMovieData] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const blocklist = useSelector((state) => state.BlocklistReducer.blocklist);
  const allMoviesData = useSelector(state => state.getMoviesReducer.allMoviesData);

  React.useEffect(() => {
    setMovies(allMoviesData.filter(movie=>blocklist.includes(movie.id)))
  }, []);

  React.useEffect(() => {
    let newData = movieData.filter(movie=>blocklist.includes(movie.id));
    setMovieData(newData);
  }, [blocklist]);

  React.useEffect(() => {
    setMovieData(movies);
  }, [movies]);

  return (
    <div className={classes.contents}>
      <MovieListBlock
        movies={movieData}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default Block;
