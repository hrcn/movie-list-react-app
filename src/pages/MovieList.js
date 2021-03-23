import React from 'react'
import Pagination from '../components/Pagination'

function MovieList() {
  return (
    <div>
      <Pagination count={15} onChange={handleChangePage} />
    </div>
  )
}

function handleChangePage(e,page){
  console.log(page);
}

export default MovieList
