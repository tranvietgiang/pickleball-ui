import Link from '../../components/common/Link'
import SectionTitle from '../../components/common/SectionTitle'
import ProductGrid from '../../components/product/ProductGrid'
import { categories, images, posts, products } from '../../data/siteData'

function PromoTile({ image, title, href }) {
  return (
    <Link href={href} className="relative min-h-32 overflow-hidden rounded bg-white shadow-sm">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-3 left-3 text-white">
        <h3 className="font-black uppercase">{title}</h3>
        <span className="text-xs font-bold text-[#aee506]">Xem ngay</span>
      </div>
    </Link>
  )
}

function ServiceTile({ title }) {
  return (
    <div className="flex items-center gap-3 rounded bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-[#08222f] font-black text-[#aee506]">✓</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-slate-500">Dịch vụ tại cửa hàng</p>
      </div>
    </div>
  )
}

function FlashSale() {
  return (
    <section className="my-8 rounded bg-[#08222f] p-4 text-white">
      <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h2 className="text-2xl font-black uppercase">Flash sale giá sốc</h2>
        <div className="flex gap-2 text-center">
          {['00 Ngày', '0 Giờ', '00 Phút', '00 Giây'].map((item) => (
            <span key={item} className="rounded bg-white px-3 py-2 text-sm font-bold text-[#08222f]">{item}</span>
          ))}
        </div>
      </div>
      <ProductGrid items={products.filter((product) => product.sale)} />
    </section>
  )
}

function NewsPreview() {
  return (
    <section className="mt-8">
      <SectionTitle title="Tin tức Pickleball" />
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="bg-white shadow-sm ring-1 ring-slate-200">
            <img src={post.image} alt="" className="h-44 w-full object-cover p-4" />
            <div className="p-4">
              <span className="text-xs font-bold uppercase text-[#ff311c]">{post.tag}</span>
              <h3 className="mt-2 text-lg font-black">{post.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-[1340px] gap-3 px-4 py-4 lg:grid-cols-[300px_1fr]">
        <aside className="hidden bg-white shadow-sm ring-1 ring-slate-200 lg:block">
          <div className="bg-[#aee506] px-4 py-3 font-bold uppercase text-[#08222f]">Danh mục sản phẩm</div>
          {categories.map((item) => (
            <Link key={item.title} href={item.path} className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 text-sm font-semibold hover:bg-slate-50">
              {item.icon && <img src={item.icon} alt="" className="h-6 w-6 rounded object-cover" />}
              {item.title}
            </Link>
          ))}
        </aside>
        <div className="grid gap-3 lg:grid-cols-[1fr_300px]">
          <div className="relative min-h-[260px] overflow-hidden rounded bg-[#08222f] md:min-h-[420px]">
            <img src={images.hero} alt="Joola Gen 5" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
              <div>
                <p className="text-sm font-bold uppercase text-[#aee506]">Thế giới Pickleball</p>
                <h1 className="text-2xl font-black uppercase md:text-5xl">Joola Gen 5</h1>
              </div>
              <Link href="/vot-pickleball-joola/" className="rounded bg-[#aee506] px-5 py-3 text-sm font-black uppercase text-[#08222f]">Mua ngay</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            <PromoTile image={images.hero2} title="Kamito Alpha X" href="/vot-pickleball-kamito/" />
            <PromoTile image={images.hero3} title="Balbon Air Power" href="/product/balbon-air/" />
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-[1340px] px-4 pb-10">
        <div className="mb-6 grid gap-3 md:grid-cols-3">
          <ServiceTile title="Trao đổi vợt Pickleball" />
          <ServiceTile title="Thay đế giày Pickleball" />
          <ServiceTile title="Sửa vợt Pickleball" />
        </div>
        <SectionTitle title="Chỉ có trong hôm nay" />
        <ProductGrid items={products.slice(0, 5)} />
        <FlashSale />
        <SectionTitle title="Sản phẩm mới" />
        <ProductGrid items={products.slice(1, 9)} />
        <section className="my-8 grid gap-3 md:grid-cols-[1fr_1.3fr]">
          <PromoTile image={images.square} title="Joola Gen 5 về hàng" href="/vot-pickleball-joola/" />
          <PromoTile image={images.kamito} title="Alpha X Champion Series" href="/vot-pickleball-kamito/" />
        </section>
        <SectionTitle title="Vợt Pickleball" />
        <ProductGrid items={products.filter((product) => product.category === 'Vợt Pickleball')} />
        <SectionTitle title="Giày Pickleball" />
        <ProductGrid items={products.filter((product) => product.category === 'Giày Pickleball')} />
        <NewsPreview />
      </main>
    </>
  )
}

export default HomePage
