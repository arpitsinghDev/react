import {useGetComingMovieQuery} from '../hooks/useApi'
import ListMovies from './showMovies/ListMovies'
export const ComingMovie = () => {
const { data, error, isLoading, isFetching } = useGetComingMovieQuery()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return (
    <div>
      <h2>Coming Movie</h2>
      {isFetching && <p>Refreshing...</p>}
      
          <ListMovies movies={data?.results}/>
       
    </div>
  )
}
