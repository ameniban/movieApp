import axios from "axios";

export const baseApi = axios.create(
   { baseURL: "https://api.themoviedb.org",
     headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDZlMTQyNmQ1OTM1NDI5YzQ3NjYxMmVmMGUwM2VlYyIsIm5iZiI6MTcyNTgyNTQ1NC41OTYzMzksInN1YiI6IjY2ZDkzMzhiYmU3YzgyZTNlZWI4Y2U4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XRou4t0m2O8qxdgRBgDELXf2SQUKJ2kZ8NY0v4lPA-E'
        }
   }
)