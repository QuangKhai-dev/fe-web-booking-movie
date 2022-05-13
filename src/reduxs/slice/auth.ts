import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export type LoginParams = {
  taiKhoan: string
  matKhau: string
}

export type RegisterParams = {
  taiKhoan: string
  matKhau: string
  email: string
  soDt: string
  maNhom: string
  maLoaiNguoiDung: string
  hoTen: string
}

const authApis = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL }),
  endpoints: build => ({
    login: build.mutation<any, LoginParams>({
      query: params => ({
        url: '/QuanLyNguoiDung/DangNhap',
        method: 'POST',
        body: params
      })
    }),
    register: build.mutation<any, RegisterParams>({
      query: params => ({
        url: '/QuanLyNguoiDung/DangKy',
        method: 'POST',
        body: params
      })
    }),
    getCurrentUser: build.mutation<any, any>({
      query: (params: { taiKhoan: string }) => ({
        url: '/QuanLyNguoiDung/ThongTinTaiKhoan',
        method: 'POST',
        body: params
      })
    })
  })
})
export default authApis
export const { useLoginMutation, useRegisterMutation, useGetCurrentUserMutation } = authApis
