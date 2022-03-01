export type Movie = {
  maPhim: number
  tenPhim: string
  biDanh: string
  trailer: string
  hinhAnh: string
  moTa: string
  maNhom: string
  ngayKhoiChieu: string
  danhGia: string
  lichChieu: ShowTime[]
}
export type Theater = {
  maHeThongRap: string
  tenHeThongRap: string
  biDanh: string
  logo: string
}
export type TheaterCluster = {
  maCumRap:string
  tenCumRap:string
  diaChi:string
  danhSachRap: Array<{
    maRap:number
    tenRap:string
  }>
}

export type TheaterInformation = {
  maCumRap:string
  maHeThongRap:string
  maRap:number
  tenCumRap:string
  tenHeThongRap:string
  tenRap:string
}


export type ShowTime =  { 
  giaVe: number
  maLichChieu:number
  maPhim:number 
  maRap:number
  ngayChieuGioChieu:string
  tenPhim:string
  thoiLuong:string
  thongTinRap:TheaterInformation
}
