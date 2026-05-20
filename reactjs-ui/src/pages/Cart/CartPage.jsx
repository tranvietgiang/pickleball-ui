import Link from '../../components/common/Link'

function CartPage() {
  return (
    <main className="mx-auto max-w-[900px] px-4 py-8">
      <div className="rounded bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <h1 className="text-3xl font-black uppercase text-[#08222f]">Giỏ hàng</h1>
        <p className="mt-3 text-slate-600">Chưa có sản phẩm trong giỏ hàng.</p>
        <Link href="/" className="mt-6 inline-block rounded bg-[#aee506] px-6 py-3 font-black uppercase text-[#08222f]">Quay trở lại cửa hàng</Link>
      </div>
    </main>
  )
}

export default CartPage
