import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MOVIE_DETAIL,API_OPTION } from "../../utility/constant";

const MovieCover = () => {
  // Get the "id" param from the URL using React Router v6
  const [movieData,setMovieData]=useState(null)
  const { id } = useParams();
    useEffect(()=>{
        (async ()=>{
            const res=await fetch(MOVIE_DETAIL+id, API_OPTION);
            const data=await res.json();
            setMovieData(data);
        })()
            },[]);
  return (
    <>
    {movieData ? (
        <div className="relative bg-white text-gray-900 min-h-screen">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-6 py-10 max-w-6xl mx-auto">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                    alt={movieData.title}
                    className="w-64 rounded-lg shadow-lg mb-6 md:mb-0"
                />
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-2">{movieData.title}</h1>
                    <p className="text-lg text-gray-800 mb-2 italic">{movieData.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {movieData.genres.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-blue-400 text-xs px-2 py-1 rounded"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                    <p className="mb-4">{movieData.overview}</p>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-4">
                        <span>
                            <span className="font-semibold text-black">Release:</span> {movieData.release_date}
                        </span>
                        <span>
                            <span className="font-semibold text-black">Runtime:</span> {movieData.runtime} min
                        </span>
                        <span>
                            <span className="font-semibold text-black">Status:</span> {movieData.status}
                        </span>
                        <span>
                            <span className="font-semibold text-black">Language:</span> {movieData.spoken_languages.map(l => l.english_name).join(", ")}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-yellow-400 font-bold text-lg">
                            ★ {movieData.vote_average.toFixed(1)}
                        </span>
                        <span className="text-gray-400">({movieData.vote_count} votes)</span>
                    </div>
                    {movieData.homepage && (
                        <a
                            href={movieData.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                        >
                            Official Website
                        </a>
                    )}
                </div>
            </div>
            {movieData.backdrop_path && (
                <div
                    className="absolute inset-0 -z-10 opacity-30"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.backdrop_path})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            )}
        </div>
    ) : (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-white text-xl">Loading...</div>
        </div>
    )}
      <div>Movie ID: {id}</div>
    </>
  );
};

export default MovieCover;
