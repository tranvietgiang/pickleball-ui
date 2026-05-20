import { stores } from '../../data/siteData'

function StorePage() {
  return (
    <main className="mx-auto max-w-[1340px] px-4 py-6">
      <h1 className="mb-5 text-3xl font-black uppercase text-[#08222f]">Hệ thống cửa hàng Thế giới Pickleball</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {stores.map((store) => (
          <div key={store} className="rounded bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-black">{store}</h2>
            <p className="mt-2 text-slate-600">Mở cửa 09:00 - 21:00, hỗ trợ thử vợt, tư vấn giày và nhận bảo dưỡng phụ kiện.</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default StorePage
