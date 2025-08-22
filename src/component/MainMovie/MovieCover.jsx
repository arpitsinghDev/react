import { useParams } from "react-router";

const MovieCover = () => {
  // Get the "id" param from the URL using React Router v6
  const { id } = useParams();

  return (
    <>
      <Header />
      <div>Movie ID: {id}</div>
    </>
  );
};

export default MovieCover;
