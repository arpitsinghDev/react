import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Header";
import { MOVIE_DETAIL,API_OPTION } from "../../utility/constant";

const MovieCover = () => {
  // Get the "id" param from the URL using React Router v6
  const [movieData,setMovieData]=useState(null)
  const { id } = useParams();
    useEffect(()=>{
        (async ()=>{
            // const res=await fetch(MOVIE_DETAIL+id, API_OPTION);
            // const data=await res.json();
            // setMovieData(data);
        })()
            },[]);
  return (
    <>
      <div>Movie ID: {id}</div>
      <pre>{movieData}</pre>
    </>
  );
};

export default MovieCover;
