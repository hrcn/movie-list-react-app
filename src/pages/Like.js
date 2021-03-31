import React from "react";
import MovieListBlock from "../components/MovieListBlock";
import axios from "axios";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import MovieBlock from ''

let url1 = "https://api.themoviedb.org/3/movie/";
let url2 = "?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US";
const useStyles = makeStyles((theme) => ({
  contents: {
    margin: "1rem",
    display: "inline",
  },
}));

function Like(props) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [movieData, setMovieData] = React.useState([]);
  React.useEffect(() => {
    let data = [];
    props.likelist.map((element) => {
      let tempurl = `${url1}${element}${url2}`;
      axios
        .get(tempurl)
        .then((res) => {
          data = [...data, res.data];
          setMovieData(data);
        })
        .catch((err) => console.log(err));
    });
  }, []);

  React.useEffect(() => {
    let newData = movieData.filter(movie=>props.likelist.includes(movie.id));
    setMovieData(newData);
  }, [props.likelist]);

  return (
    <div className={classes.contents}>
      <MovieListBlock
        movies={movieData}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

const MapStateToProps = (state) => {
  return {
    likelist: state.LikelistReducer.likelist,
    blocklist: state.BlocklistReducer.blocklist,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(MapStateToProps, MapDispatchToProps)(Like);
