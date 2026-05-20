import { useState } from 'react'
import Link from '../common/Link'
import { categories, images } from '../../data/siteData'
import { navigateTo } from '../../utils/navigation'

function Header() {
  const [open, setOpen] = useState(false)
  const [term, setTerm] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const query = term.trim()
    navigateTo(query ? `/search/?s=${encodeURIComponent(query)}` : '/search/')
  }

  return (
    <header className="sticky top-0 z-40 bg-[#08222f] text-white shadow-lg">
      <div className="border-b border-white/10 bg-[#061923] text-xs">
        <div className="mx-auto flex max-w-[1340px] items-center justify-between px-4 py-2">
          <div className="hidden gap-4 md:flex">
            <Link href="/flash-sale/" className="hover:text-[#aee506]">Khuyến mãi</Link>
            <Link href="/tin-tuc/" className="hover:text-[#aee506]">Tin tức</Link>
            <Link href="/he-thong-cua-hang/" className="hover:text-[#aee506]">Hệ thống cửa hàng toàn quốc</Link>
          </div>
          <div className="flex w-full items-center justify-between gap-3 md:w-auto">
            <span>Hotline: 0909 686 555</span>
            <Link href="/theo-doi-don-hang/" className="hover:text-[#aee506]">Theo dõi đơn hàng</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1340px] items-center gap-3 px-4 py-3">
        <button className="grid h-10 w-10 place-items-center rounded border border-white/20 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="text-xl">☰</span>
        </button>
        <Link href="/" className="shrink-0">
          <img src={images.logo} alt="Thế giới Pickleball" className="h-12 w-36 object-contain md:h-16 md:w-52" />
        </Link>
        <form onSubmit={submit} className="hidden flex-1 items-center rounded-md bg-white p-1 md:flex">
          <input value={term} onChange={(event) => setTerm(event.target.value)} className="h-10 flex-1 px-4 text-sm text-slate-900 outline-none" placeholder="Tìm vợt, giày, phụ kiện..." />
          <button className="h-10 rounded bg-[#aee506] px-5 text-sm font-bold text-[#08222f]">Tìm kiếm</button>
        </form>
        <Link href="/cart/" className="ml-auto flex items-center gap-2 rounded border border-white/20 px-3 py-2 text-sm font-semibold hover:border-[#aee506]">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#aee506] text-[#08222f]">0</span>
          Giỏ hàng
        </Link>
      </div>
      <nav className={`${open ? 'block' : 'hidden'} border-t border-white/10 lg:block`}>
        <div className="mx-auto flex max-w-[1340px] flex-col gap-1 px-4 py-2 lg:flex-row lg:items-center lg:gap-0">
          {categories.map((category) => (
            <div key={category.title} className="group relative">
              <Link href={category.path} onNavigate={() => setOpen(false)} className="flex items-center gap-2 rounded px-3 py-2 text-sm font-semibold uppercase hover:bg-white/10 hover:text-[#aee506]">
                {category.icon && <img src={category.icon} alt="" className="h-5 w-5 rounded object-cover" />}
                {category.title}
              </Link>
              {category.children && (
                <div className="hidden min-w-64 rounded-b bg-white p-2 text-slate-800 shadow-xl lg:absolute lg:left-0 lg:top-full lg:group-hover:block">
                  {category.children.map((child) => (
                    <Link key={child} href={`/${category.title.toLowerCase().replaceAll(' ', '-')}-${child.toLowerCase().replaceAll(' ', '-')}/`} className="block rounded px-3 py-2 text-sm hover:bg-slate-100 hover:text-[#08222f]">
                      {category.title} {child}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/tin-tuc/" className="rounded px-3 py-2 text-sm font-semibold uppercase hover:bg-white/10 hover:text-[#aee506]">Tin tức</Link>
          <Link href="/lien-he/" className="rounded px-3 py-2 text-sm font-semibold uppercase hover:bg-white/10 hover:text-[#aee506]">Liên hệ</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
