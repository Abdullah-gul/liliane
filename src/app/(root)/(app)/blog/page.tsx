import { getBlogPosts } from '@/utils/get-blog-posts'
import PageTitle from '../components/PageTitle'
import BlogPostItem from './components/BlogPostItem'



export default async function BlogPage() {
  const blogs = getBlogPosts().sort((a, b) => {
    if (new Date(a.timestamp) > new Date(b.timestamp)) {
      return -1
    }
    return 1
  })

  return (
    <>
      <PageTitle title="Blog" />
      <ul className="grid grid-cols-1 gap-3 md:mb-5">
        {blogs.map((post) => (
          <li key={post.id}>
            <BlogPostItem post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
