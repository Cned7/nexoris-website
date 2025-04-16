'use client'

import { useEffect, useState } from 'react'
import { getAllPosts } from '@/lib/api'
import { BlogPost } from '@/lib/types'
import Breadcrumbs from '@/components/Breadcrumbs'
import BlogCard from '@/components/blog/BlogCard'

const breadcrumbs = [
  { name: 'Home', href: '/', isCurrentPage: false },
  { name: 'Insight', href: '/blogs', isCurrentPage: true },
]

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts } = await getAllPosts()
        setPosts(posts)
      } catch (err) {
        setError('Failed to load blog posts.')
        console.error(err)
      }
    }

    fetchPosts()
  }, [])

  if (error) return <p className="max-w-screen-md mx-auto p-4">{error}</p>

  return (
    <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21">
      <section>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </section>

      <div className="max-w-screen-xl mx-auto p-4 min-h-screen">
        <h1 className="text-3xl font-bold text-heading mb-8 text-center font-jet-brains">
          All Blog Posts
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-text">No blog posts found.</p>
        ) : (
          // ✅ Responsive grid layout applied here
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} /> // ✅ Using your reusable card
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default BlogPage
