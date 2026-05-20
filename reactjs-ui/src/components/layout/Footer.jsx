import { images } from '../../data/siteData'

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="mb-3 font-black uppercase text-[#aee506]">{title}</h3>
      <div className="grid gap-2 text-sm text-white/75">
        {items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-10 bg-[#08222f] text-white">
      <div className="mx-auto grid max-w-[1340px] gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <img src={images.footerLogo} alt="Thế giới Pickleball" className="mb-4 h-16 w-52 object-contain" />
          <p className="text-sm text-white/70">Hệ thống cửa hàng Pickleball chuyên nghiệp, cung cấp vợt, giày, trang phục và phụ kiện chính hãng.</p>
        </div>
        <FooterList title="Danh mục" items={['Vợt Pickleball', 'Giày Pickleball', 'Bóng Pickleball', 'Phụ kiện Pickleball']} />
        <FooterList title="Hỗ trợ" items={['Theo dõi đơn hàng', 'Liên hệ | Trợ giúp', 'Chính sách đổi trả', 'Hệ thống cửa hàng']} />
        <div>
          <h3 className="mb-3 font-black uppercase text-[#aee506]">Hotline</h3>
          <p className="text-2xl font-black">0909 686 555</p>
          <p className="mt-2 text-sm text-white/70">Tư vấn từ 09:00 đến 21:00 mỗi ngày.</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">UI React + Tailwind mô phỏng hệ thống thegioipickleball.com</div>
    </footer>
  )
}

export default Footer
