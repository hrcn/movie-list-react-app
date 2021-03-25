import React from 'react'
import CarouselItem from './CarouselItem'

import Carousel from 'react-material-ui-carousel'
import { Container } from '@material-ui/core'

const styles = {
  container: {
    margin: '5rem',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
  }
}

function MovieCarousel({ movieData }) {
  return (
    
    <Container style={styles.container}>
      {console.log(movieData)}
      <Carousel style={styles.box}>
        {
          movieData.map(element => <CarouselItem key={element.id} element={element} />)
        }
      </Carousel>
    </Container>
  )
}

export default MovieCarousel
