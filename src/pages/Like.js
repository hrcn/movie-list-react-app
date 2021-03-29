import React from 'react'
import Pagination from '../components/Pagination'
import MovieListBlock from '../components/MovieList'
import axios from 'axios'
import {connect} from 'react-redux';
import { addLikes } from '../redux/actions/addLikes';
import { makeStyles } from '@material-ui/core/styles';
// import MovieBlock from ''

let url = `https://api.themoviedb.org/3/discover/movie?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

const useStyles = makeStyles(theme => ({
  contents: {
    margin: '1rem',
    display: 'inline',
  },
}))

function Like(props) {
  const classes = useStyles()
  const [modalOpen, setModalOpen] = React.useState(false)
  const [movieData, setMovieData] = React.useState([])
  console.log(props.likelist);
  // props.addLikes(12345);
  React.useEffect(() => {
    axios.get(url)
      .then(res => setMovieData(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleChangePage = (e, page) => {
    let newurl = `${url}${page}`
    axios.get(newurl)
      .then(res => setMovieData(res.data.results))
      .catch(err => console.log(err))
  }

  return (
    <div className={classes.contents}>
      <MovieListBlock movies={movieData} 
      modalOpen={modalOpen} 
      setModalOpen={setModalOpen} />
      <Pagination count={15} onChange={handleChangePage} />
    </div>
  )
}

const MapStateToProps = (state) => {
    return {
    likelist: state.LikelistReducer.likelist,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addLikes: (id)=>dispatch(addLikes(id)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Like);
