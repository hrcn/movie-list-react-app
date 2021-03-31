import React from "react";
import MovieListBlock from "../components/MovieListBlock";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { URL_GET_MOVIE_1, URL_GET_MOVIE_2} from '../constants/urls';

const useStyles = makeStyles((theme) => ({
  contents: {
    margin: "1rem",
    display: "inline",
  },
}));

function Like() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [movieData, setMovieData] = React.useState([]);
  const likelist = useSelector((state) => state.LikelistReducer.likelist);
  React.useEffect(() => {
    let data = [];
    likelist.map((element) => {
      let tempurl = `${URL_GET_MOVIE_1}${element}${URL_GET_MOVIE_2}`;
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
    let newData = movieData.filter(movie=>likelist.includes(movie.id));
    setMovieData(newData);
  }, [likelist]);

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

export default Like;
