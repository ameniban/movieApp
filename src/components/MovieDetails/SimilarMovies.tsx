import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";
import MovieList from "../Home/MovieList";
import { MovieCardType } from "../../utils/constant";

function SimilarMovies({ movieId }: { movieId:string}) {
    const [similar, setSimilar] = useState<MovieCardType[]>([]);
    const [page, setPage] = useState(0)

    const fetchSimilar = async ( page:number ) => {
      try {
        const response = await api.get(`/3/movie/${movieId}/similar?language=en-US&page=${page}`);
        setSimilar(prev=>[...prev, ...response.data.results]);
      } catch (err) {
        console.log("Fetch similar movies Error", err);
      }
    };
    useEffect(() => {
        fetchSimilar(1);
        setPage(prev => prev+1)
    }, [movieId]);



  return <div>
       <MovieList movies={similar} title="Similar Movies" />

  </div>;
}

export default SimilarMovies;
