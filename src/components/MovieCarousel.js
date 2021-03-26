import React, { Fragment } from 'react'
import CarouselItem from './CarouselItem'
import MovieModal from './MovieModal'

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

function MovieCarousel({ movieData, modalOpen, setModalOpen }) {
  return (
    <Container style={styles.container}>
      <Carousel style={styles.box}>
        {
          movieData.map(element => (
            <Fragment key={element.id}>
              <CarouselItem  element={element} setModalOpen={setModalOpen} />
              <MovieModal currentMovie={element} modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </Fragment>
          ))
        }
      </Carousel>
    </Container>
  )
}

export default MovieCarousel
