import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Theater } from "interfaces"

export const theaterApis = createApi({
  reducerPath: "theater",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
  endpoints: builder => ({
    getAllTheatersSystem: builder.query<Theater[], void>({
      query: () => `QuanLyRap/LayThongTinHeThongRap`
    }),
    getOneTheaterSystem: builder.query<Theater[], string| void>({
      query: (id)=>`QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${id}`
    })
  })
})

export const { useGetAllTheatersSystemQuery, useGetOneTheaterSystemQuery } = theaterApis
