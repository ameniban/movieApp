export const img_path = "https://image.tmdb.org/t/p/original"

export  interface CarouselMovie {
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_count: number;
  }

export interface MovieCardType {
  id : number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  original_language:string;
}

//export const Categories= ["Now Playing", "Top Rated", "Popular","Upcoming"]
export interface CategoriesType {
  name: string,
  path : string
}
export const Categories : CategoriesType [] = [
  {
    name : "Now Playing" , path : "now_playing"
  },
  {
    name : "Top Rated" , path : "top_rated"
  },
  {
    name : "Popular" , path : "popular"
  },
  {
    name : "Upcoming" , path : "upcoming"
  },
]

export interface MovieDetailType {
  id: number
  poster_path: string
  backdrop_path: string
  original_title: string
  release_date: string
  tagline: string
  overview: string
  genres: { name: string }[]
  vote_average:number
  original_language: string
}
