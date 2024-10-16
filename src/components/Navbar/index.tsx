import { ChangeEvent, useEffect, useState,KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axiosInstance";
import CarouselMiniCard from "../Home/CarouselMiniCard";

function Navbar() {
  const [search, setSearch] = useState("");
  const [searchedList, setSearchedList] = useState<MovieCardType>([]);
  const [showSearch, setShowSearch] = useState(false);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const toggleShow =(bool: boolean)=>{
    setShowSearch(bool)
  }
  const handleKeyPress =(e: KeyboardEvent<HTMLInputElement>)=>{
if (e.key === "Enter") {
  (e?.target as HTMLInputElement).blur()

}
 }
  
  const fetchSearch = async () => {
    try {
      const res = await api.get(
        `/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
      );
      setSearchedList(res.data.results);
    } catch (err) {
      console.log("fetch search error", err);
    }
  };

  useEffect(() => {
    if (search.length > 0 ) setShowSearch(true)
      else setShowSearch(false)
    fetchSearch();
  }, [search]);
  return (
    <nav className="bg-[#121212] py-2">
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <div className="flex space-x-16">
          <Link to="/">
            <div className="flex flex-col text-yellow-500">
              <h1 className="text-[18px] leading-4">ALL ABOUT</h1>
              <h1 className="text-[24px] leading-5 font-semibold">MOVIES</h1>
            </div>
          </Link>
          <Link to="/movies">
            <button className="text-[18px] text-yellow-500 hover:underline">
              EXPLORE
            </button>
          </Link>
        </div>
        <div className="">
          <input
            className="w-[500px] h-10 bg-black text-[#2c2c2c] text-lg outline-none px-4 placeholder:text-[#646464] rounded-xl"
            type="text"
            placeholder="search ..."
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            onClick={()=>toggleShow(true)}
          />
          {
            showSearch && search.length > 0 && 
            <div className="absolute z-30 top-2 right-[13rem] text-yellow-500 text-2xl" onClick={()=>toggleShow(false)}>x</div>
          }
          { showSearch && 
          <div className="relative" onClick={()=>toggleShow(false)}>
            <div className="absolute z-50 left-0 w-full bg-zinc-800 rounded-xl">
              <div className="py-3 pl-5">
                <div className="flex flex-col gap-2 h-fit max-h-[380px] overflow-y-auto">
                  {searchedList.length > 0 &&
                    searchedList.map((item, ind) => (
                      <CarouselMiniCard
                        carouselMovies={searchedList}
                        item={ind}
                        ind={ind}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
