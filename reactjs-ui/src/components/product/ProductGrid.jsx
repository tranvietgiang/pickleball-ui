import ProductCard from './ProductCard'

function ProductGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {items.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default ProductGrid
