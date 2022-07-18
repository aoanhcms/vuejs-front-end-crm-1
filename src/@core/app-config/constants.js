const genderOptions = [
  { text: 'Chọn Giới tính', value: '' },
  { text: 'Nam', value: 'male' },
  { text: 'Nữ', value: 'female' },
  { text: 'Không xác định', value: 'none' },
]
const orderSourceOptions = [
  { value: null, text: 'Tất cả các nguồn', selected: true, disabled: true },
  { value: 2, text: 'FB Comment' },
  { value: 3, text: 'FB Inbox' },
  { value: 4, text: 'Tạo tay' },
  { value: 5, text: 'Zalo' },
  { value: 6, text: 'Hot Line' },
  { value: 7, text: 'Shopee' },
  { value: 8, text: 'Chưa rỏ nguồn' },
  { value: 9, text: 'sLangdingpages.com' },
  { value: 10, text: 'ViChat' },
  { value: 11, text: 'IKON' },
  { value: 12, text: 'Palilon' },
  { value: 13, text: 'KH giới thiệu' },
  { value: 14, text: 'PalBox' },
]
const typeOrderOptions = [
  { value: null, text: 'Chọn', selected: true, disabled: true },
  { value: 1, text: 'SALE (số mới)' },
  { value: 2, text: 'CSKH' },
  { value: 3, text: 'Tối ưu' },
  { value: 4, text: 'Đặt lại' },
  { value: 5, text: 'Đặt lại lần 1' },
  { value: 6, text: 'Đặt lại lần 2' },
  { value: 7, text: 'Đặt lại lần 3' },
  { value: 8, text: 'Đặt lại lần 4' },
  { value: 9, text: 'Đặt lại lần 5' },
  { value: 10, text: 'Đặt lại lần 6' },
  { value: 11, text: 'Đặt lại lần 7' },
  { value: 12, text: 'Đặt lại lần 8' },
  { value: 13, text: 'Đặt lại lần 9' },
  { value: 14, text: 'Đặt lại lần 10' },
  { value: 15, text: 'Đặt lại lần 11' },
  { value: 16, text: 'Đặt lại lần 12' },
  { value: 17, text: 'Đặt lại lần 13' },
  { value: 18, text: 'Đặt lại lần 14' },
  { value: 19, text: 'Đặt lại lần 15' },
  { value: 20, text: 'Đặt lại lần 16' },
  { value: 21, text: 'Đặt lại lần 17' },
  { value: 22, text: 'Đặt lại lần 18' },
  { value: 23, text: 'Đặt lại lần 19' },
  { value: 24, text: 'Đặt lại lần 20' },
  { value: 25, text: 'Đặt lại trên 20 lần' },
  { value: 26, text: 'Cross sale' },
  { value: 27, text: 'Afiliate' },
]
const UpSaleOptions = [
  { value: null, text: 'Tất cả' },
]
const CategoryOptions = [
  { value: 1, text: 'Đơn chưa phân loại' },
  { value: 2, text: 'Học Online' }]
const PrintOptions = [
  { value: 1, text: 'Đơn đã in' },
  { value: 2, text: 'Đơn chưa in' }
]
const GroupCustomerOptions = [
  { value: 1, text: 'Khách mới' },
  { value: 2, text: 'Khách quen' },
  { value: 3, text: 'Học lại' }]
const MatchOptions = [
  { value: 1, text: 'Số trùng' },
  { value: 2, text: 'Số thường' },
]
const TelcoOptions = [
  { value: '', text: 'Tất cả Nhà Mạng' },
  { value: 1, text: 'Viettel' },
  { value: 2, text: 'MobileFone' },
  { value: 3, text: 'VinaPhone' },
  { value: 4, text: 'VietnamMobile' },
]
export default { UpSaleOptions, PrintOptions, genderOptions, orderSourceOptions, typeOrderOptions, MatchOptions, TelcoOptions, GroupCustomerOptions, CategoryOptions, }
