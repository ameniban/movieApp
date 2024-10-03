import { useEffect, useState } from "react";
import api from "../../api/axiosInstance";
import YouTube from 'react-youtube';

function Trailer({ movieId }: {movieId: string}) {
    const [trailers, setTrailers] = useState<{key: string, name: string}[]>([]);

    const fetchTrailers = async () => {
      try {
        const response = await api.get(`/3/movie/${movieId}/videos?language=en-US`);
        const trailerObj = response.data.results.filter((data: {type : string}) => data.type === "Trailer")
        setTrailers(trailerObj);
      } catch (err) {
        console.log("Fetch trailer Error", err);
      }
    };
  
    useEffect(() => {
      fetchTrailers();
    }, []);
    const opts = {
      height: '280',
      width:'380'
    }
  return (
   <div className="">
    {trailers.length >0 && 
   <div className="mt-16">
        <h1 className="text-3xl text-yellow-500 font-bold">Watch Trailers</h1>
       <div className="flex flex-wrap gap-4">
       {trailers.map((vid, index) => (
          <div key={index} className="flex flex-col gap-2 mt-4">
            <YouTube videoId={vid.key} opts={opts} />
            <h1 className="text-xl w-[380px]">{vid.name}</h1>
          </div>
        ))}
       </div>
       </div>}
    </div>
  )
}

export default Trailer