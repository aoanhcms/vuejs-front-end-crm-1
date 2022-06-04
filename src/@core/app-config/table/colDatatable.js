const ColTypefilterDropdownItems = [{
  value: 'staff',
  text: 'Nhân Viên',
},
{
  value: 'teacher',
  text: 'Giáo Viên',
}]
const ColStatus = [{
  status: true,
  text: 'Đang chạy',
},
{
  value: false,
  text: 'Đang dừng',
}]

const ColGender = [{
  status: true,
  text: 'Nam',
},
{
  value: false,
  text: 'Nữ',
}]

const exports = [{
  name: 'In', to: '/',
}]
// eslint-disable-next-line no-undef
export default { ColTypefilterDropdownItems, ColStatus, ColGender, exports }
