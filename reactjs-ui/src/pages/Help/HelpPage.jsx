function HelpPage({ type }) {
  const tracking = type === 'track'

  return (
    <main className="mx-auto max-w-[900px] px-4 py-8">
      <div className="rounded bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-black uppercase text-[#08222f]">{tracking ? 'Theo dõi đơn hàng' : 'Liên hệ | Trợ giúp'}</h1>
        <p className="mt-3 text-slate-600">{tracking ? 'Nhập số điện thoại hoặc mã đơn để kiểm tra trạng thái giao hàng.' : 'Đội ngũ Thế giới Pickleball luôn sẵn sàng tư vấn sản phẩm, bảo hành và cửa hàng gần bạn.'}</p>
        <form className="mt-6 grid gap-3">
          <input className="rounded border px-4 py-3" placeholder={tracking ? 'Số điện thoại / mã đơn hàng' : 'Họ và tên'} />
          {!tracking && <input className="rounded border px-4 py-3" placeholder="Số điện thoại" />}
          <textarea className="min-h-32 rounded border px-4 py-3" placeholder={tracking ? 'Ghi chú thêm' : 'Nội dung cần hỗ trợ'} />
          <button className="rounded bg-[#08222f] px-6 py-3 font-black uppercase text-white">Gửi thông tin</button>
        </form>
      </div>
    </main>
  )
}

export default HelpPage
