import React, { Fragment } from "react";
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
  // const BlockList = [];
  return (
    <Container className={classes.movielist}>
      {movies.map((element) => (
        <Fragment key={element.id}>
          <MovieCard
            movieData={element}
            className={classes.movie}
            setModalOpen={props.setModalOpen}
          />
          <MovieModal
            currentMovie={element}
            modalOpen={props.modalOpen}
            setModalOpen={props.setModalOpen}
          />
        </Fragment>
      ))}
    </Container>
  );
}
