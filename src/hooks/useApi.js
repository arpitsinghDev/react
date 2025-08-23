import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_OPTION } from "../utility/constant";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("authorization", API_OPTION.headers.Authorization);

      headers.set("accept", "application/json");

      return headers;
    },
  }),
  endpoints: (build) => ({
    getPopularMovie: build.query({
      query: () => `movie/popular`,
      keepUnusedDataFor: 5
    }),
    getComingMovie:build.query({
         query: () => `movie/upcoming`,
      keepUnusedDataFor: 5
    }),
    getRatedMovie:build.query({
         query: () => `/movie/top_rated`,
      keepUnusedDataFor: 5
    }),
    getReleasedMovie:build.query({
         query: () => `/movie/upcoming`,
      keepUnusedDataFor: 5
    })
  }),

});
export const { 
    useGetPopularMovieQuery, 
    useGetComingMovieQuery, 
    useGetRatedMovieQuery, 
    useGetReleasedMovieQuery 
} = api;
