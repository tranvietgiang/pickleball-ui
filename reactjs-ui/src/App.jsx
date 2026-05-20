import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/Home/HomePage'
import CategoryPage from './pages/Category/CategoryPage'
import ProductPage from './pages/Product/ProductPage'
import NewsPage from './pages/News/NewsPage'
import StorePage from './pages/Store/StorePage'
import HelpPage from './pages/Help/HelpPage'
import CartPage from './pages/Cart/CartPage'
import SearchPage from './pages/Search/SearchPage'

function resolvePage(path) {
  if (path.startsWith('/product/')) return <ProductPage id={path.split('/')[2]} />
  if (path.startsWith('/tin-tuc')) return <NewsPage />
  if (path.startsWith('/he-thong-cua-hang')) return <StorePage />
  if (path.startsWith('/theo-doi-don-hang')) return <HelpPage type="track" />
  if (path.startsWith('/lien-he')) return <HelpPage />
  if (path.startsWith('/cart')) return <CartPage />
  if (path.startsWith('/search')) return <SearchPage />
  if (path !== '/') return <CategoryPage path={path} />
  return <HomePage />
}

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f7f7]">
      <Header />
      {resolvePage(path)}
      <Footer />
    </div>
  )
}

export default App
