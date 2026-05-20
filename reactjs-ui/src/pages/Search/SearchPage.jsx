import SectionTitle from '../../components/common/SectionTitle'
import ProductGrid from '../../components/product/ProductGrid'
import { products } from '../../data/siteData'

function SearchPage() {
  const params = new URLSearchParams(window.location.search)
  const term = params.get('s') || ''
  const found = products.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()) || product.brand.toLowerCase().includes(term.toLowerCase()))

  return (
    <main className="mx-auto max-w-[1340px] px-4 py-6">
      <SectionTitle title={`Tìm kiếm: ${term || 'Sản phẩm'}`} />
      <ProductGrid items={found.length ? found : products} />
    </main>
  )
}

export default SearchPage
