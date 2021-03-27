import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Favorite from "@material-ui/icons/Favorite";
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles({
    root: {
        width: '21%',
        margin: 10,
        height: 570,
        display: 'inline',
        float: 'left',
        '& .area': {
            height: 550,
        },
        '& .buttons': {
            display: "inline-block",
            transform: 'translateY(100%)',
            height: 50,
        },
        '& .texts': {
            height: 200,
        },
        '&:hover': {
            '& .area': {
                transform: 'translateY(-20%)',
            },
            '& .buttons': {
                transform: 'translateY(-50%)',
            }
        },
    },
    media: {
        height: 400,
    },
});

const styles = {
    animationStyle: {
        'transition-duration': '1s',
    }
  }

export default function MovieCard(props) {
    const classes = useStyles();
    const movie = props.movieData;
    console.log(movie.id);
    const url = "https://image.tmdb.org/t/p/w500";
    const likeList = [];
    const blockList = [];
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
        <Card className={classes.root} >
            <CardActionArea className="area" style={styles.animationStyle} onClick={() => props.setModalOpen(true)}> 
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
                    {likeList.includes(movie.id) ? <DeleteIcon /> : <Favorite label="like"/>}
                </Button>
                <Button size="small" color="primary">
                    {blockList.includes(movie.id) ? <DeleteIcon /> : <BlockIcon />}
                </Button>
                <Button size="small" color="primary" onClick={() => props.setModalOpen(true)}> 
                    <MoreHorizIcon />
                </Button>
            </CardActions>
        </Card>
    );
}
