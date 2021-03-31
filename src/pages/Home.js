import React, { useEffect } from "react";
import MovieCarousel from "../components/MovieCarousel";
// redux
import { useSelector, useDispatch } from "react-redux";
import getCarouselMovie from "../redux/actions/getCarouselMovie";
// UI
import { Box } from "@material-ui/core";

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
  },
};

function Home() {
  const movieData = useSelector(
    (state) => state.getCarouselMovieReducer.carouselMovieData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselMovie());
  }, []);

  return (
    <Box style={styles.box}>
      <MovieCarousel movieData={movieData} />
    </Box>
  );
}

export default Home;
