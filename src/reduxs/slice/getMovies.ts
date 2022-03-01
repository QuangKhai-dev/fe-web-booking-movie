import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Movie } from "interfaces"

type Movies = {
  count: number
  currentPage: number
  items: Movie[]
  totalCount: number
  totalPages: number
}

type ComingSoonParams = {
  fromDay: string
  toDay: string
}

export const moviesApis = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
  endpoints: builder => ({
    getMoviesNowShowing: builder.query<Movies, void>({
      query: () => `/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=8`
    }),
    getMoviesComingSoon: builder.query<Movie[], ComingSoonParams>({
      query: ({ fromDay, toDay }) =>
        `/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10&tuNgay=${fromDay}&denNgay=${toDay}`
    }),
    getMovie : builder.query<Movie, string | void>({
      query: (id)=>`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    })
  })
})
export const { useGetMoviesNowShowingQuery, useGetMoviesComingSoonQuery , useGetMovieQuery} = moviesApis
