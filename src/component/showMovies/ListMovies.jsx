import { useSelector } from "react-redux";
import ShowMovie from "./showMovie";
// import PropTypes from "prop-types";

const ListMovies = (props) => {
  let movies;
  if (props.movies) {
    movies = props?.movies;
  } else {
    movies = useSelector((state) => state.nowMovie);
  }
  if(!movies) return;
  return (
    <>
      {movies.map((m) => (
        
        <ShowMovie key={m.id} {...m} />
      ))}
    </>
  );
};

// ListMovies.propTypes = {
//     movies: PropTypes.array
// };

export default ListMovies;
