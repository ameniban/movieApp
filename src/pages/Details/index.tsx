import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axiosInstance";
import { img_path, MovieDetailType } from "../../utils/constant";
import Trailer from "../../components/MovieDetails/Trailer";
import SimilarMovies from "../../components/MovieDetails/SimilarMovies";

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
      {details && params.id && (
        <div className="relative h-fit w-full">
          <div className="relative">
            <img
              src={img_path + details?.backdrop_path}
              alt="background"
              className="opacity-40 w-full aspect-[7/4] object-center"
            />
            <div className="absolute bottom-0 w-full h-full _crouselGradient"></div>
          </div>
          <div className="absolute top-0 pb-[100px]">
            <div className="w-[90%] mx-auto mt-[500px]">
              <div className="flex gap-8">
                <img
                  src={img_path + details?.poster_path}
                  alt="poster"
                  className="w-[350px] h-fit"
                />
                <div className="">
                  <h1 className="text-5xl">
                    {" "}
                    {details?.original_title}
                    <span className="mx-3 text-4xl">
                      ({details?.release_date.substring(0, 4)})
                    </span>
                  </h1>
                  <div className="text-xl text-slate-300 mt-2">
                    <h2>{details?.tagline}</h2>
                    <h2 className="mt-3">{details?.overview}</h2>
                    <div className="flex flex-col gap-3 mt-4 text-zinc-300">
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
      )}
    </div>
  );
}

export default Details;
