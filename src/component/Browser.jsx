import { useEffect } from "react";
import Header from "./Header"
import { useDispatch } from "react-redux";
import { API_OPTION, MOVIE_NOW } from "../utility/constant";
import { addNowMovie } from "../utility/store/nowMovieSlice";

const Browser = () => {
const dispatch=useDispatch()
  const fetchMovieData= async function () {
    try {
      const res= await fetch(MOVIE_NOW,API_OPTION);
      const data = await res.json();
      console.log(data);
      
      dispatch(addNowMovie(data?.results[0]));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchMovieData();
  },[])
  return (
    <div>
      <Header/>
      <h1>Browser Component</h1>
    </div>
  )
}

export default Browser
