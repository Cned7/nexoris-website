'use client'

import { useEffect, useState } from 'react'
import { BlogPost } from '@/lib/types'
import { getAllPosts } from '@/lib/api'
import BlogCard from '../blog/BlogCard'
import Loader from '@/components/Loader'
import Link from 'next/link'

const LatestBlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts } = await getAllPosts(1) // Get page 1
        const latestPosts = posts.slice(0, 4) // Get latest 4
        setPosts(latestPosts)
      } catch (error) {
        console.error('Error fetching latest posts:', error)
        setError('Failed to load blog posts.')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <section className=" mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-heading">
        From Our Blog
      </h2>

      {loading && (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      )}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}

      <div className="text-center mt-8">
        <Link
          href="/blogs"
          className="inline-block px-6 py-3 bg-heading text-lg text-secondary-text rounded-lg hover:bg-button transition"
        >
          View All Blog Posts
        </Link>
      </div>
    </section>
  )
}

export default LatestBlogSection
