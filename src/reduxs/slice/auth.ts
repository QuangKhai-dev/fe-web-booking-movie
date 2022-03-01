import { createApi ,fetchBaseQuery} from "@reduxjs/toolkit/dist/query";

export const authApis = createApi({
  reducerPath:'auth',
  baseQuery:fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
  endpoints : builder =>({
    
  })
})