import {useGetPopularMovieQuery} from '../hooks/useApi'
import ListMovies from './showMovies/ListMovies'
export const PopularMovie = () => {
const { data, error, isLoading, isFetching } = useGetPopularMovieQuery()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div>
      <h2>Popular</h2>
      {isFetching && <p>Refreshing...</p>}
      
          <ListMovies movies={data?.results}/>
       
    </div>
  )
}
