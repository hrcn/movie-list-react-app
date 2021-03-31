import React from "react";
import Pagination from "../components/Pagination";
import MovieListBlock from "../components/MovieListBlock";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
// import MovieBlock from ''

let url = `https://api.themoviedb.org/3/discover/movie?api_key=ef30f4e9c750cffe15946a29e54f094e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const useStyles = makeStyles((theme) => ({
  contents: {
    margin: "1rem",
    justifyContent: "center",
    display: "inline",
  },
  buttons: {
    margin: "1rem",
    display: "flex",
    justifyContent: "center",
  }
}));

function MovieList(props) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [movieData, setMovieData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleChangePage = (e, page) => {
    let newurl = `${url}${page}`;
    axios
      .get(newurl)
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.log(err));
  };
  const handleSortByPopularity = (e) => {
    movieData.sort((a, b) => {
      if (a.title < b.title) return 1;
      else return -1;
    })
    setMovieData(JSON.parse(JSON.stringify(movieData)));
  }
  const handleSortByName = (e) => {
    movieData.sort((a, b) => {
      if (a.title > b.title) return 1;
      else return -1;
    })
    setMovieData(JSON.parse(JSON.stringify(movieData)));
  }
  const handleSortByYear = (e) => {
    movieData.sort((a, b) => {
      if (a.publish_date < b.publish_date) return 1;
      else return -1;
    })
    setMovieData(JSON.parse(JSON.stringify(movieData)));
  }
  const handleSortByVotes = (e) => {
    movieData.sort((a, b) => {
      if (a.average_votes > b.average_votes) return 1;
      else return -1;
    })
    setMovieData(JSON.parse(JSON.stringify(movieData)));
  }

  return (
    <div className={classes.contents}>
      <ButtonGroup className={classes.buttons} size="large" color="primary" aria-label="large outlined primary button group">
        <Button variant="contained" color="primary" onClick={handleSortByPopularity}>Sort by Popularity</Button>
        <Button variant="contained" color="primary" onClick={handleSortByName}>Sort by Name</Button>
        <Button variant="contained" color="primary" onClick={handleSortByVotes}>Sort by Views</Button>
        <Button variant="contained" color="primary" onClick={handleSortByYear}>Sort by Year</Button>
      </ButtonGroup>
      <MovieListBlock
        movies={movieData}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <Pagination count={15} onChange={handleChangePage} />
    </div>
  );
}

export default MovieList;
