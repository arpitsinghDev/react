import {useGetReleasedMovieQuery} from '../hooks/useApi'
import ListMovies from './showMovies/ListMovies'
export const ReleasedMovie = () => {
const { data, error, isLoading, isFetching } = useGetReleasedMovieQuery()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div>
      <h2>New Released Movie</h2>
      {isFetching && <p>Refreshing...</p>}
      
          <ListMovies movies={data?.results}/>
       
    </div>
  )
}