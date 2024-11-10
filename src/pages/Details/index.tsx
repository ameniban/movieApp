import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axiosInstance";
import { img_path, MovieDetailType } from "../../utils/constant";
import Trailer from "../../components/MovieDetails/Trailer";
import SimilarMovies from "../../components/MovieDetails/SimilarMovies";
import DetailsPageSkeleton from "../../components/skeleton/DetailsPageSkeleton";

function Details() {
  const params = useParams();
  const [details, setDetails] = useState<MovieDetailType>();

  const fetchDetails = async () => {
    try {
      const response = await api.get(`/3/movie/${params.id}?language=en-US`);
      setDetails(response?.data);
    } catch (err) {
      console.log("Fetch Deatils Error", err);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params]);
  return (
    <div>
      {details && params.id ? (
        <div className="relative h-fit w-full">
          <div className="relative">
            <img
              src={img_path + details?.backdrop_path}
              alt="background"
              className="opacity-40 w-full min-h-[500px] aspect-[7/4] object-cover"
            />
            <div className="absolute bottom-0 w-full h-full _crouselGradient"></div>
          </div>
          <div className="absolute top-0 pb-[100px]">
            <div className="w-[90%] mx-auto lg:mt-[500px] md:mt-[400px] mt-[200px] ">
              <div className="md:flex gap-8">
                <img
                  src={img_path + details?.poster_path}
                  alt="poster"
                  className="lg:w-[350px] md:w-[280px] sm:w-[250px] w-[200px] h-fit aspect-[4/6]"
                />
                <div className="">
                  <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
                    {" "}
                    {details?.original_title}
                    <span className="md:mx-3 mx-1 lg:text-4xl  md:text-4xl sm:text-3xl text-2xl">
                      ({details?.release_date.substring(0, 4)})
                    </span>
                  </h1>
                  <div className="lg:text-xl  md:text-lg sm:text-md text-slate-300 mt-1 sm:mt-2">
                    <h2>{details?.tagline}</h2>
                    <h2 className="sm:mt-3 mt-2">{details?.overview}</h2>
                    <div className="flex flex-col md:gap-3 gap-2 mt-4 text-zinc-300">
                    <h2 className="">
                      Genres: {details?.genres.map(genre => genre.name).join(',')}</h2>
                 <h2>Rating: {String(details?.vote_average).substring(0, 3)}</h2>
                 <h2>Original Language: {details?.original_language}</h2>
                 <h2>Original Date: {details?.release_date}</h2>
                 </div>
                  </div>
                </div>
              </div>
              <Trailer movieId={params.id} />
              <SimilarMovies movieId={params.id} />
            </div>
          </div>
        </div>
      )
    : 
    <DetailsPageSkeleton />
    }
    </div>
  );
}

export default Details;
