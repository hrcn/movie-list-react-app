import React from "react";
import Pagination from "../components/Pagination";
import MovieListBlock from "../components/MovieListBlock";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
import { URL_GET_MOVIES } from '../constants/urls';
import { useSelector, useDispatch } from "react-redux";

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
  const blocklist = useSelector((state) => state.BlocklistReducer.blocklist);

  //temp
  const [getMovieData, setGetMovieData] = React.useState([]);
  const [allMovieData, setAllMovieData] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(async () => {
    await axios
      .get(URL_GET_MOVIES)
      .then((res) => setGetMovieData(res.data.results))
      .catch((err) => console.log(err));

    await axios
      .get(`${URL_GET_MOVIES}2`)
      .then((res) => setGetMovieData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(()=>{
    setAllMovieData([...allMovieData, ...getMovieData]);
  },[getMovieData])

  React.useEffect(() => {
    retriveMovieData(page);
  }, [allMovieData,page]);

  React.useEffect(() => {
    retriveMovieData(page);
  }, [blocklist]);

  const retriveMovieData = (page) => {
    let unblocked = allMovieData.filter((element)=>{return !blocklist.includes(element.id)})
    console.log(allMovieData);
    if(unblocked.length>=page*20){
      let res = unblocked.slice((page-1)*20,page*20)
      setMovieData(res);
  }
  }

  const handleChangePage = (e, page) => {
    setPage(page);
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
