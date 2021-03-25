import React from 'react'
import axios from 'axios'

import { Paper, Typography, IconButton } from '@material-ui/core'
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined'

const styles = {
  paper: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    height: 'auto',
    width: '100%'
  },
  title: {
    position: 'absolute',
    bottom: '3%',
    left: '0',
    width: '100%',
    height: '10rem',
    color: 'white',
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
  },
  clickButton: {
    position: 'absolute',
    bottom: '8%',
    left: '48%',
    color: 'white',
    transform: 'scale(3)'
  }
}

function CarouselItem({ element }) {
  let imageUrl = `https://image.tmdb.org/t/p/original`

  const playTrailer = id => {
    console.log(id);
    let trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US`
    
    axios.get(trailerUrl)
      .then(res => window.open(`https://www.youtube.com/watch?v=${res.data.results[0].key}`))
  }

  return (
    <Paper style={styles.paper} elevation={0}>
      <Typography variant='h3' style={styles.title}>
        {element.title}
      </Typography>
      <IconButton style={styles.clickButton} onClick={() => playTrailer(element.id)}>
        <PlayCircleFilledWhiteOutlinedIcon />
      </IconButton>
      <img 
        style={styles.image}
        src={`${imageUrl}${element.backdrop_path}`}
        alt="movie poster"
      />
    </Paper>
  )
}

export default CarouselItem