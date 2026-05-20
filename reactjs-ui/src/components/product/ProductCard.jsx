import Link from '../common/Link'
import { money } from '../../utils/format'

function ProductCard({ product }) {
  return (
    <article className="group relative bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      {product.sale && <div className="absolute left-2 top-2 z-10 rounded-full bg-[#ff311c] px-2 py-1 text-xs font-bold text-white">-{product.sale}%</div>}
      <Link href={`/product/${product.id}/`} className="block">
        <div className="aspect-square overflow-hidden bg-slate-50">
          <img src={product.image} alt={product.name} className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105" />
        </div>
        <h3 className="mt-3 min-h-12 text-sm font-semibold leading-6 text-slate-900">{product.name}</h3>
      </Link>
      <div className="mt-2 text-xs text-amber-500">★★★★★ <span className="text-slate-500">({product.reviews})</span></div>
      <div className="mt-2 min-h-12">
        <div className="font-bold text-[#ff311c]">{money(product.price)}</div>
        {product.old && <div className="text-sm text-slate-400 line-through">{money(product.old)}</div>}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm font-semibold">
        <button className="rounded border border-slate-300 px-2 py-2 text-slate-700 hover:border-[#08222f]">Xem nhanh</button>
        <button className="rounded bg-[#08222f] px-2 py-2 text-white hover:bg-[#123445]">Chọn</button>
      </div>
    </article>
  )
}

export default ProductCard
