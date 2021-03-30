import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Favorite from "@material-ui/icons/Favorite";
import BlockIcon from "@material-ui/icons/Block";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { connect } from "react-redux";
import { addLikes } from "../redux/actions/addLikes";
import { removeLikes } from "../redux/actions/removeLikes";
import { addBlocks } from "../redux/actions/addBlocks";
import { removeBlocks } from "../redux/actions/removeBlocks";

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
  const url = "https://image.tmdb.org/t/p/w500";
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
          {props.likelist.includes(movie.id) ? (
            <DeleteIcon onClick={() => props.removeLikes(movie.id)} />
          ) : (
            <Favorite
              label="like"
              onClick={() => {
                props.addLikes(movie.id);
                props.removeBlocks(movie.id);
              }}
            />
          )}
        </Button>
        <Button size="small" color="primary">
          {props.blocklist.includes(movie.id) ? (
            <DeleteIcon onClick={() => props.removeBlocks(movie.id)} />
          ) : (
            <BlockIcon
              onClick={() => {
                props.addBlocks(movie.id);
                props.removeLikes(movie.id);
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

const MapStateToProps = (state) => {
  return {
    likelist: state.LikelistReducer.likelist,
    blocklist: state.BlocklistReducer.blocklist,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addLikes: (id) => dispatch(addLikes(id)),
    removeLikes: (id) => dispatch(removeLikes(id)),
    addBlocks: (id) => dispatch(addBlocks(id)),
    removeBlocks: (id) => dispatch(removeBlocks(id)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(MovieCard);
