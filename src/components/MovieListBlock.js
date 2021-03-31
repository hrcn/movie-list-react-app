import React, { useState } from "react";
//mui
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
//components
import MovieModal from "./MovieModal";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
  movielist: {},
  movie: {
    height: "2rem",
    width: "20%",
  },
}));

export default function MovieListBlock(props) {
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
          key={element.id}
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
