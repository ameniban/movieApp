import { MovieCardType } from "../../utils/constant";
import MovieCard from "./movieCard";

interface MovieListProps {
  movies: MovieCardType[];
  title?: string;

}

function MovieList({ movies, title }: MovieListProps) {
  return (
    <div className="mt-14">
     { 
      title && <h1 className="font-bold text-3xl text-yellow-500">{title}</h1>}
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
