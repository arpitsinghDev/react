import { useEffect } from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { API_OPTION, MOVIE_NOW } from "../utility/constant";
import { addNowMovie } from "../utility/store/nowMovieSlice";
import ListMovies from "./showMovies/ListMovies";

const Browser = () => {
  const dispatch = useDispatch();
  const fetchMovieData = async function () {
    try {
      const res = await fetch(MOVIE_NOW, API_OPTION);
      const data = await res.json();
      console.log(data);
      if (data?.results.length > 0) {
        const filterData = data?.results.map((el) => {
          return {
            id:el.id,
            title: el.title,
            overview: el.overview,
            release_date: el.release_date,
            poster_path: el.poster_path,
          };
        });

        dispatch(addNowMovie(filterData));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <div>
      <Header />
      <ListMovies />
    </div>
  );
};

export default Browser;
