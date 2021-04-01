import React, { useState } from "react";
//mui
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
//components
import MovieModal from "./MovieModal";
import MovieCard from "./MovieCard";

const useStyles = makeStyles(theme => ({
  movielist: {
  },
  movie: {
  }
}));

export default function MovieListBlock(props) {
  const classes = useStyles();
  const movies = props.movies;
  const [currentMovie, setCurrentMovie] = useState({});
  return (
    <Container className={classes.movielist}>
      {movies.map(element => (
        <MovieCard
          movieData={element}
          className={classes.movie}
          setCurrentMovie={setCurrentMovie}
          key={element.id}
        />
      ))}
      <MovieModal currentMovie={currentMovie} modalOpen={props.modalOpen} />
    </Container>
  );
}
