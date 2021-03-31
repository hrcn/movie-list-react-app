import React from "react";
//ui
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
//icons
import Favorite from "@material-ui/icons/Favorite";
import BlockIcon from "@material-ui/icons/Block";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { addLikes } from "../redux/actions/addLikes";
import { removeLikes } from "../redux/actions/removeLikes";
import { addBlocks } from "../redux/actions/addBlocks";
import { removeBlocks } from "../redux/actions/removeBlocks";
//constants
import { URL_MOVIE_IMG } from '../constants/urls';

const useStyles = makeStyles({
  root: {
    width: "21%",
    margin: 10,
    height: 570,
    display: "inline",
    float: "left",
    "& .area": {
      height: 550,
    },
    "& .buttons": {
      display: "inline-block",
      transform: "translateY(100%)",
      height: 50,
    },
    "& .texts": {
      height: 200,
    },
    "&:hover": {
      "& .area": {
        transform: "translateY(-50%)",
      },
      "& .buttons": {
        transform: "translateY(-50%)",
      },
    },
  },
  media: {
    height: 400,
  },
});

const styles = {
  animationStyle: {
    transitionDuration: "1s",
  },
};

function MovieCard(props) {
  const classes = useStyles();
  const movie = props.movieData;
  const url = URL_MOVIE_IMG;
  const likelist = useSelector((state) => state.LikelistReducer.likelist);
  const blocklist = useSelector((state) => state.BlocklistReducer.blocklist);
  const dispatch = useDispatch();

  if (!movie)
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Loading
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  return (
    <Card className={classes.root}>
      <CardActionArea
        className="area"
        style={styles.animationStyle}
        onClick={() => {
          props.setModalOpen(true);
          props.setCurrentMovie(movie);
        }}
      >
        <CardMedia
          className={classes.media}
          image={`${url}${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent className="texts">
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="buttons" style={styles.animationStyle}>
        <Button size="small" color="primary">
          {likelist.includes(movie.id) ? (
            <DeleteIcon onClick={() => dispatch(removeLikes(movie.id))} />
          ) : (
            <Favorite
              label="like"
              onClick={() => {
                dispatch(addLikes(movie.id));
                dispatch(removeBlocks(movie.id));
              }}
            />
          )}
        </Button>
        <Button size="small" color="primary">
          {blocklist.includes(movie.id) ? (
            <DeleteIcon onClick={() => dispatch(removeBlocks(movie.id))} />
          ) : (
            <BlockIcon
              onClick={() => {
                dispatch(addBlocks(movie.id));
                dispatch(removeLikes(movie.id));
              }}
            />
          )}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => props.setModalOpen(true)}
        >
          <MoreHorizIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
