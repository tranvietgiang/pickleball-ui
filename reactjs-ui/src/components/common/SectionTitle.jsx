function SectionTitle({ title, action = 'Xem tất cả' }) {
  return (
    <div className="mb-4 flex items-center justify-between border-b-2 border-[#08222f]">
      <h2 className="bg-[#08222f] px-4 py-2 text-base font-bold uppercase text-white md:text-xl">{title}</h2>
      <button className="text-sm font-semibold text-[#08222f] hover:text-[#ff311c]">{action}</button>
    </div>
  )
}

export default SectionTitle
