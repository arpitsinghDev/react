import { Link } from "react-router";
import { MOVIE_POSTER_W5 } from "../../utility/constant";


const ShowMovie = (props) => {
  const { title, release_date, poster_path, overview,id }=props;
    return (
        <div className="show-movie max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
            <div className="md:flex">
                {poster_path && (
                    <div className="md:shrink-0">
                        <img
                            className="h-48 w-full object-cover md:h-full md:w-48"
                            src={MOVIE_POSTER_W5+poster_path}
                            alt={title}
                        />
                    </div>
                )}
                <div className="p-8">
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{title}</h2>
                    <p className="mt-2 text-gray-500"><strong>Release date:</strong> {release_date}</p>
                    <p className="mt-2 text-gray-500">{overview}</p>
                    <Link to={"../movie/"+id}>More Info...</Link>
                </div>
            </div>
        </div>
    );
};

export default ShowMovie;