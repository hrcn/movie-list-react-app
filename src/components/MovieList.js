import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import MovieModal from "./MovieModal";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
  movielist: {},
  movie: {
    height: "2rem",
    width: "20%",
  },
}));

export default function MovieList(props) {
  const classes = useStyles();
  const movies = props.movies;
  const [currentMovie, setCurrentMovie] = useState({});
  // const BlockList = [];
  return (
    <Container className={classes.movielist}>
      {movies.map((element) => (
        <MovieCard
          movieData={element}
          className={classes.movie}
          setModalOpen={props.setModalOpen}
          setCurrentMovie={setCurrentMovie}
        />
      ))}
      <MovieModal
        currentMovie={currentMovie}
        modalOpen={props.modalOpen}
        setModalOpen={props.setModalOpen}
      />
    </Container>
  );
}
