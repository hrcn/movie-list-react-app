import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    movielist: {
    },
    movie: {
        float: 'left',
        height: '3rem',
        width: '20%',
        margin: '2%',
    }

}))


export default (props) => {
    const classes = useStyles()
    const movies = props.movies;
    const BlockList = [];
    let element = document.getElementById('movies');
    if (element) element.innerHTML = "";
    movies.forEach(movie => {
        if (!BlockList.includes(movie.id)) {
            let movieNode = document.createElement('div');
            movieNode.innerText = `${movie.title}`;
            movieNode.className = `${classes.movie}`;
            element.appendChild(movieNode);
        }
    });

    return (
        <section id="movies" className={classes.movielist}>
        </section>
    )
}
