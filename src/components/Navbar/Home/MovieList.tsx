import { MovieCardType } from "../../../constant";
import MovieCard from "./movieCard";

interface MovieListProps {
  movies: MovieCardType[];
}

function MovieList({ movies }: MovieListProps) {
  return (
    <div className="my-14">
      <h1 className="font-bold text-3xl text-yellow-500">Top Rated Movies</h1>
      <div className="row row-cols-6">
        {movies.length > 0 &&
          movies.map((movie, idx) => (
        
           <MovieCard key={idx} movieData = {movie} />
           
          ))}
      </div>
    </div>
  );
}

export default MovieList;
