import React from "react";
import Pagination from "../components/Pagination";
import MovieListBlock from "../components/MovieListBlock";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import getMoviesByPage from "../redux/actions/getMoviesByPage";
const useStyles = makeStyles(theme => ({
  contents: {
    margin: "1rem",
    justifyContent: "center",
    display: "inline"
  },
  buttons: {
    margin: "1rem",
    display: "flex",
    justifyContent: "center"
  },
  button: {
    width:"15rem",
    position: "relative",
  }
}));

function MovieList(props) {
  const classes = useStyles();
  const [movieData, setMovieData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const blocklist = useSelector(state => state.BlocklistReducer.blocklist);
  const modalOpen = useSelector(state => state.modalReducer.modalOpen);
  const allMoviesData = useSelector(state => state.getMoviesReducer.allMoviesData);
  const allMoviesDataPage = useSelector(state => state.getMoviesReducer.page);
  const dispatch = useDispatch();

  React.useEffect(() => {
  }, []);

  React.useEffect(() => {
    retriveMovieData(page);
  }, [allMoviesData, page, blocklist]);

  const retriveMovieData = page => {
    let unblocked = allMoviesData.filter(element => {
      return !blocklist.includes(element.id);
    });
    if (unblocked.length >= page * 20) {
      let res = unblocked.slice((page - 1) * 20, page * 20);
      setMovieData(res);
    } else {
      dispatch(getMoviesByPage(allMoviesDataPage + 1));
    }
  };

  const handleChangePage = (e, page) => {
    setPage(page);
  };

  const handleSortByPopularity = e => {
    movieData.sort((a, b) => {
      if (a.title < b.title) return 1;
      else return -1;
    });
    setMovieData(JSON.parse(JSON.stringify(movieData)));
  };
  const handleSortByName = e => {
    movieData.sort((a, b) => {
      if (a.title > b.title) return 1;
      else return -1;
    });
    setMovieData(JSON.parse(JSON.stringify(movieData)));
  };
  const handleSortByYear = e => {
    movieData.sort((a, b) => {
      if (a.publish_date < b.publish_date) return 1;
      else return -1;
    });
    setMovieData(JSON.parse(JSON.stringify(movieData)));
  };
  const handleSortByVotes = e => {
    movieData.sort((a, b) => {
      if (a.average_votes > b.average_votes) return 1;
      else return -1;
    });
    setMovieData(JSON.parse(JSON.stringify(movieData)));
  };

  return (
    <div className={classes.contents}>
      <ButtonGroup className={classes.buttons} size="large" color="primary">
        <Button className={classes.button} onClick={handleSortByPopularity}>
          Sort by Popularity
        </Button>
        <Button className={classes.button} onClick={handleSortByName}>
          Sort by Name
        </Button>
        <Button className={classes.button} onClick={handleSortByVotes}>
          Sort by Views
        </Button>
        <Button className={classes.button} onClick={handleSortByYear}>
          Sort by Year
        </Button>
      </ButtonGroup>
      <MovieListBlock movies={movieData} modalOpen={modalOpen} />
      <Pagination count={15} onChange={handleChangePage} />
    </div>
  );
}

export default MovieList;
