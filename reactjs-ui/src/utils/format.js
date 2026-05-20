export function money(value) {
  return value ? `${value.toLocaleString('vi-VN')} ₫` : 'Liên hệ'
}
