import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCarousel from '../components/MovieCarousel'

import { Box } from '@material-ui/core'

let url = `https://api.themoviedb.org/3/discover/movie?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'center'
  }
}

function Home() {
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    axios.get(url)
      .then(res => setMovieData(res.data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <Box style={styles.box}>
      <MovieCarousel movieData={movieData} />
    </Box>
  )
}

export default Home
