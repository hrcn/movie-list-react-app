import React from "react";

import { Paper, Typography } from "@material-ui/core";

const styles = {
  paper: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: "auto",
    width: "100%",
  },
  title: {
    position: "absolute",
    bottom: "3%",
    left: "0",
    width: "100%",
    height: "8rem",
    color: "white",
    backgroundColor: "rgba(211, 211, 211, 0.5)",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  },
  clickButton: {
    position: "absolute",
    bottom: "8%",
    left: "48%",
    color: "white",
    transform: "scale(3)",
  },
};

function CarouselItem({ element, setModalOpen }) {
  let imageUrl = `https://image.tmdb.org/t/p/original`;

  return (
    <Paper
      style={styles.paper}
      elevation={0}
      onClick={() => setModalOpen(true)}
    >
      <img
        style={styles.image}
        src={`${imageUrl}${element.backdrop_path}`}
        alt="movie poster"
      />
      <Typography variant="h3" style={styles.title}>
        {element.title}
      </Typography>
    </Paper>
  );
}

export default CarouselItem;
