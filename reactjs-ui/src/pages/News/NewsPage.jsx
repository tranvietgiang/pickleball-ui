import SectionTitle from '../../components/common/SectionTitle'
import { posts } from '../../data/siteData'

function NewsPage() {
  return (
    <main className="mx-auto max-w-[1340px] px-4 py-6">
      <SectionTitle title="Tin tức Pickleball" />
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="bg-white shadow-sm ring-1 ring-slate-200">
            <img src={post.image} alt="" className="h-44 w-full object-cover p-4" />
            <div className="p-4">
              <span className="text-xs font-bold uppercase text-[#ff311c]">{post.tag}</span>
              <h2 className="mt-2 text-lg font-black">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Thông tin, review và kinh nghiệm chơi Pickleball được biên tập theo phong cách trang gốc.</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default NewsPage
