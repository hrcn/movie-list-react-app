import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// components
import CarouselItem from "./CarouselItem";
import MovieModal from "./MovieModal";
// UI
import Carousel from "react-material-ui-carousel";
import { Container } from "@material-ui/core";

const styles = {
  container: {
    margin: "5rem",
  },
  box: {
    display: "flex",
    justifyContent: "center",
  },
};

function MovieCarousel({ movieData }) {
  const modalOpen = useSelector((state) => state.modalReducer.modalOpen);

  return (
    <Container style={styles.container}>
      <Carousel style={styles.box}>
        {movieData.map((element) => (
          <Fragment key={element.id}>
            <CarouselItem element={element} modalOpen={modalOpen} />
            <MovieModal currentMovie={element} modalOpen={modalOpen} />
          </Fragment>
        ))}
      </Carousel>
    </Container>
  );
}

export default MovieCarousel;
