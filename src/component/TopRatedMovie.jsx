import {useGetRatedMovieQuery} from '../hooks/useApi'
import ListMovies from './showMovies/ListMovies'
export const TopRatedMovie = () => {
const { data, error, isLoading, isFetching } = useGetRatedMovieQuery()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div>
      <h2>Top Rated Movie</h2>
      {isFetching && <p>Refreshing...</p>}
      
          <ListMovies movies={data?.results}/>
       
    </div>
  )
}