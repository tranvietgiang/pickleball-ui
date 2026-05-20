import SectionTitle from '../../components/common/SectionTitle'
import ProductGrid from '../../components/product/ProductGrid'
import { categories, products } from '../../data/siteData'

function pathToTitle(path) {
  const category = categories.find((item) => item.path === path)
  return category?.title || decodeURIComponent(path.replace(/^\/|\/$/g, '').replaceAll('-', ' ')) || 'Thế giới Pickleball'
}

function getCategoryKey(title) {
  if (title.includes('Giày')) return 'Giày Pickleball'
  if (title.includes('Phụ kiện')) return 'Phụ kiện Pickleball'
  if (title.includes('Khuyến') || title.toLowerCase().includes('sale')) return 'sale'
  if (title.includes('Bóng')) return 'Bóng Pickleball'
  return 'Vợt Pickleball'
}

function CategoryPage({ path }) {
  const title = pathToTitle(path)
  const key = getCategoryKey(title)
  const list = key === 'sale'
    ? products.filter((product) => product.sale)
    : products.filter((product) => product.category === key || product.brand.toLowerCase().includes(title.toLowerCase().split(' ').at(-1)))

  return (
    <main className="mx-auto max-w-[1340px] px-4 py-6">
      <div className="mb-5 rounded bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <div className="text-sm text-slate-500">Trang chủ / {title}</div>
        <h1 className="mt-2 text-3xl font-black uppercase text-[#08222f]">{title}</h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <h2 className="mb-3 font-bold uppercase">Lọc sản phẩm</h2>
          {['Joola', 'Kamito', 'Asics', 'Adidas', 'Selkirk'].map((item) => <label key={item} className="mb-2 flex gap-2 text-sm"><input type="checkbox" /> {item}</label>)}
          <div className="mt-5 border-t pt-4">
            <p className="mb-2 text-sm font-bold">Khoảng giá</p>
            <input type="range" className="w-full accent-[#08222f]" />
          </div>
        </aside>
        <section>
          <div className="mb-4 flex items-center justify-between rounded bg-white p-3 shadow-sm ring-1 ring-slate-200">
            <span className="text-sm text-slate-600">Hiển thị {list.length || products.length} sản phẩm</span>
            <select className="rounded border px-3 py-2 text-sm"><option>Thứ tự mặc định</option><option>Giá thấp đến cao</option><option>Mới nhất</option></select>
          </div>
          <SectionTitle title={title} />
          <ProductGrid items={list.length ? list : products} />
        </section>
      </div>
    </main>
  )
}

export default CategoryPage
