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