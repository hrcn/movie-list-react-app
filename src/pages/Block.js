import React from 'react'
import Pagination from '../components/Pagination'
import MovieListBlock from '../components/MovieList'
import axios from 'axios'
import {connect} from 'react-redux';
import { addLikes } from '../redux/actions/addLikes';
import { makeStyles } from '@material-ui/core/styles';
// import MovieBlock from ''

let url = `https://api.themoviedb.org/3/discover/movie?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
let url1 = 'https://api.themoviedb.org/3/movie/'; 
let url2 = '?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US'; 
const useStyles = makeStyles(theme => ({
  contents: {
    margin: '1rem',
    display: 'inline',
  },
}))

function Block(props) {
  const classes = useStyles()
  const [modalOpen, setModalOpen] = React.useState(false)
  const [movieData, setMovieData] = React.useState([])
  console.log(props.blocklist);
  // props.addLikes(12345);
  React.useEffect(() => {
    props.blocklist.map((element)=>{
      let tempurl = `${url1}${element}${url2}`;
      axios.get(tempurl)
      .then(res => {
        console.log('response:',res.data);
        setMovieData([...movieData,res.data]);
      })
      .catch(err => console.log(err))
    })
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
    </div>
  )
}

const MapStateToProps = (state) => {
    return {
      blocklist: state.BlocklistReducer.blocklist,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    addLikes: (id)=>dispatch(addLikes(id)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Block);
