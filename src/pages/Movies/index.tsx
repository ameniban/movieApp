import { useEffect, useState } from "react";
import { Categories, MovieCardType } from "../../utils/constant";
import api from "../../api/axiosInstance";
import MovieList from "../../components/Home/MovieList";

function Movies() {
  const [filter, setfilter] = useState(Categories[0].name);
  const [nowplaying, setNowplaying] = useState<MovieCardType[]>([]);
  const [popular, setPopular] = useState<MovieCardType[]>([]);
  const [upcoming, setUpcoming] = useState<MovieCardType[]>([]);
  const [topRated, setTopRated] = useState<MovieCardType[]>([]);

  const toggleSelection = (item: string) => {
    setfilter(item);
  };
  const fecthMovies = async (path: string) => {
    try {
      const resp = await api.get(`/3/movie/${path}?language=en-US&page=1`);
      console.log(resp.data?.results);
      switch (path) {
        case "now_playing":
          setNowplaying(resp.data?.results);
          break;
        case "popular":
          setPopular(resp.data?.results);
          break;

        case "upcoming":
          setUpcoming(resp.data?.results);
          break;
        case "top_rated":
          setTopRated(resp.data?.results);
          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const current = Categories.filter((item) => item.name == filter);

    fecthMovies(current[0].path);
    console.log('fi', filter)
  }, [filter]);
  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="text-3xl font-bold text-yellow-500">Explore Movies</h1>
      <div className="flex mt-2">
        {Categories.map((item, ind) => (
          <div key={ind}>
            <button
              className="text-base font semobold w-44 h-10 hover:bg-[#121212]"
              onClick={() => toggleSelection(item.name)}
            >
              {" "}
              {item.name}{" "}
            </button>
            <div
              className={`h-0.5 bg-blue-400 mx-auto ${
                filter === item.name ? "w-full" : "w-0"
              } duration-200`}
            >
              
            </div>
          </div>
        ))}
      </div>
    { filter == "Now Playing" && 
    <MovieList movies={nowplaying} />}
       { filter == "Popular" && 
    <MovieList movies={popular} />}
       { filter == "Upcoming" && 
    <MovieList movies={upcoming} />}
       { filter == "Top Rated" && 
    <MovieList movies={topRated} />}
      
    </div>
  );
}

export default Movies;
