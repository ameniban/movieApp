import { MovieCardType } from "../../utils/constant";
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton";
import MovieCard from "./movieCard";

interface MovieListProps {
  movies: MovieCardType[];
  title?: string;

}

function MovieList({ movies, title }: MovieListProps) {
  return (
    <div className="md:mt-14 sm-mt-8 mt-2 px-2">
     { 
      title && <h1 className="font-bold md:text-3xl sm:text-2xl text-xl text-yellow-500">{title}</h1>}
      <div className="row row-cols--xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
        {movies.length > 0 ?
          movies.map((movie, idx) => (
        
           <MovieCard key={idx} movieData = {movie} />
           
          ))
        : 
        [...Array(12)].map(item => (
          <MovieCardSkeleton />

        ))
        }
      </div>
    </div>
  );
}

export default MovieList;
