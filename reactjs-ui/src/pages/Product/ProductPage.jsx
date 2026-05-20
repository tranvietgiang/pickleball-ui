import SectionTitle from '../../components/common/SectionTitle'
import ProductGrid from '../../components/product/ProductGrid'
import { products } from '../../data/siteData'
import { money } from '../../utils/format'

function ProductPage({ id }) {
  const product = products.find((item) => item.id === id) || products[0]

  return (
    <main className="mx-auto max-w-[1340px] px-4 py-6">
      <div className="grid gap-6 bg-white p-4 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[520px_1fr]">
        <div className="aspect-square bg-slate-50">
          <img src={product.image} alt={product.name} className="h-full w-full object-contain p-8" />
        </div>
        <div>
          <div className="text-sm text-slate-500">Trang chủ / {product.category}</div>
          <h1 className="mt-3 text-2xl font-black text-[#08222f] md:text-4xl">{product.name}</h1>
          <div className="mt-3 text-amber-500">★★★★★ <span className="text-slate-500">({product.reviews} đánh giá)</span></div>
          <div className="mt-5 flex items-end gap-3">
            <span className="text-3xl font-black text-[#ff311c]">{money(product.price)}</span>
            {product.old && <span className="text-lg text-slate-400 line-through">{money(product.old)}</span>}
          </div>
          <p className="mt-5 leading-7 text-slate-600">Sản phẩm chính hãng 100%, phù hợp luyện tập và thi đấu Pickleball. Thiết kế cân bằng, bề mặt kiểm soát tốt, đang có tại hệ thống Thế giới Pickleball.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded bg-[#ff311c] px-6 py-3 font-black uppercase text-white">Mua ngay</button>
            <button className="rounded bg-[#08222f] px-6 py-3 font-black uppercase text-white">Thêm vào giỏ hàng</button>
          </div>
          <div className="mt-6 grid gap-3 text-sm md:grid-cols-3">
            <div className="rounded bg-slate-50 p-3">Giao hàng toàn quốc</div>
            <div className="rounded bg-slate-50 p-3">Đổi trả theo chính sách</div>
            <div className="rounded bg-slate-50 p-3">Tư vấn chọn vợt miễn phí</div>
          </div>
        </div>
      </div>
      <section className="mt-8">
        <SectionTitle title="Sản phẩm liên quan" />
        <ProductGrid items={products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 5)} />
      </section>
    </main>
  )
}

export default ProductPage
