import React from "react";
import axios from "axios";

import {
  Grid,
  Box,
  Modal,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "orange",
    padding: theme.spacing(20),
  },
  gridContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(200),
    height: theme.spacing(100),
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: theme.spacing(15),
    "&:focus": {
      outline: "none",
    },
  },
  trailerBox: {
    display: "flex",
    flexDirection: "column",
  },
  trailerButton: {
    color: "white",
    transform: "scale(2)",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  trailerTypography: {
    margin: theme.spacing(2),
  },
  detailTypography: {
    margin: theme.spacing(5),
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(5),
    right: theme.spacing(5),
    color: "white",
    transform: "scale(2)",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
  ratingBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function MovieModal({ currentMovie, modalOpen, setModalOpen }) {
  const classes = useStyles();
  let imageUrl = `https://image.tmdb.org/t/p/original`;
  // go to Youtube
  const playTrailer = (id) => {
    let trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US`;
    axios
      .get(trailerUrl)
      .then((res) =>
        window.open(
          `https://www.youtube.com/watch?v=${res.data.results[0].key}`
        )
      );
  };

  return (
    <Modal
      className={classes.modal}
      open={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <Grid className={classes.gridContainer} container>
        <Grid item xs={4}>
          <Box className={classes.trailerBox}>
            <img
              className={classes.poster}
              src={`${imageUrl}${currentMovie.backdrop_path}`}
              alt="movie poster"
            />
            <IconButton
              className={classes.trailerButton}
              onClick={() => playTrailer(currentMovie.id)}
            >
              <PlayCircleFilledWhiteOutlinedIcon />
              <Typography className={classes.trailerTypography}>
                Watch Trailer
              </Typography>
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Typography className={classes.detailTypography} variant="h3">
            {currentMovie.title}
          </Typography>
          <Typography className={classes.detailTypography}>
            Release Date: {currentMovie.release_date}
          </Typography>
          <Typography className={classes.detailTypography}>
            {currentMovie.overview}
          </Typography>
          <Typography className={classes.detailTypography}>
            <Box className={classes.ratingBox}>
              <StarIcon style={{ marginRight: "1rem" }} />
              {currentMovie.vote_average} / 10 from {currentMovie.vote_count}{" "}
              votes
            </Box>
          </Typography>
        </Grid>
        <HighlightOffIcon
          className={classes.closeButton}
          onClick={() => setModalOpen(false)}
        />
      </Grid>
    </Modal>
  );
}

export default MovieModal;
