import { useEffect, useState } from "react";
import { Categories, MovieCardType } from "../../utils/constant";
import api from "../../api/axiosInstance";
import MovieList from "../../components/Home/MovieList";
import LoadMoreButton from "../../components/Button/LoadMoreButton";

interface pageType {
  [key : string] : number
}
function Movies() {
  const [filter, setfilter] = useState(Categories[0].name);
  const [page, setPage] = useState<pageType>({"now_playing": 1, "popular":1, "upcoming":1, "top_rated": 1})
  const [nowplaying, setNowplaying] = useState<MovieCardType[]>([]);
  const [popular, setPopular] = useState<MovieCardType[]>([]);
  const [upcoming, setUpcoming] = useState<MovieCardType[]>([]);
  const [topRated, setTopRated] = useState<MovieCardType[]>([]);

  const toggleSelection = (item: string) => {
    setfilter(item);
  };
  const handleLoad = ()=>{
    const currCateg = Categories.find(item => item.name == filter)
    if (currCateg){
      setPage(prev => ({
        ...prev, [currCateg.path]: prev[currCateg.path] + 1
      }))
      fecthMovies(currCateg.path , page[currCateg.path] + 1 )
    }
  }
  const fecthMovies = async (path: string , page: number) => {
    try {
      const resp = await api.get(`/3/movie/${path}?language=en-US&page=${page}`);
      console.log(resp.data?.results);
      switch (path) {
        case "now_playing":
          setNowplaying(
            prev =>[...prev,resp.data?.results]
            );
          break;
        case "popular":
          setPopular (
            prev =>[...prev,resp.data?.results]
            );;
          break;

        case "upcoming":
          setUpcoming(
            prev =>[...prev,...resp.data?.results]
            );;
          break;
        case "top_rated":
          setTopRated(
            prev =>[...prev,...resp.data?.results]
            ); ;
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

    fecthMovies(current[0].path,1);
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
<div className="mb-5" onClick={() => handleLoad()} >
    <LoadMoreButton  />
      
      </div>
    </div>
  );
}

export default Movies;
