import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TheaterCluster } from 'interfaces'

export const theaterClusterApis = createApi({
  reducerPath: 'theater-cluster ',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
  endpoints: builder => ({
    getTheatersCluster: builder.query<TheaterCluster[], string | void>({
      query: id => `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
    })
  })
})

export const { useGetTheatersClusterQuery } = theaterClusterApis
