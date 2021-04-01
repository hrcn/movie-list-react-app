import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// UI
import {
  Grid,
  Box,
  Modal,
  Typography,
  IconButton,
  makeStyles
} from "@material-ui/core";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import StarIcon from "@material-ui/icons/Star";
import { IMG_URL_ORG, TRAILER_URL_1, TRAILER_URL_2 } from '../constants/urls';

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "orange",
    padding: theme.spacing(20)
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
      outline: "none"
    }
  },
  trailerBox: {
    display: "flex",
    flexDirection: "column"
  },
  trailerButton: {
    color: "white",
    transform: "scale(2)",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  trailerTypography: {
    margin: theme.spacing(2),
  },
  overviewTypography: {
    margin: theme.spacing(10),
    textAlign: "justify",
  },
  detailBox: {
    margin: theme.spacing(1)
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(5),
    right: theme.spacing(5),
    color: "white",
    transform: "scale(2)",
    cursor: "pointer",
    "&:hover": {
      color: "red"
    }
  },
  ratingBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function MovieModal({ currentMovie, modalOpen }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  let imageUrl = IMG_URL_ORG;

  // go to Youtube
  const playTrailer = id => {
    let trailerUrl = `${TRAILER_URL_1}${id}${TRAILER_URL_2}`;
    axios
      .get(trailerUrl)
      .then(res =>
        window.open(
          `https://www.youtube.com/watch?v=${res.data.results[0].key}`
        )
      );
  };

  return (
    <Modal
      className={classes.modal}
      open={modalOpen}
      onClose={() => dispatch({ type: "CLOSE_MODAL" })}
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
          <Typography className={classes.overviewTypography}>
            {currentMovie.overview}
          </Typography>
          <Box className={classes.detailBox}>
            <Box className={classes.ratingBox}>
              <StarIcon style={{ marginRight: "1rem" }} />
              {currentMovie.vote_average} / 10 from {currentMovie.vote_count}{" "}
              votes
            </Box>
          </Box>
        </Grid>
        <HighlightOffIcon
          className={classes.closeButton}
          onClick={() => dispatch({ type: "CLOSE_MODAL" })}
        />
      </Grid>
    </Modal>
  );
}

export default MovieModal;
