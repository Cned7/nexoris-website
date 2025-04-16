'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import { getAllPosts } from '@/lib/api'
import BlogCard from './BlogCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import ClientPagination from '@/components/ClientPagination'
import { BlogPost } from '@/lib/types'

export default function BlogPageClient() {
  const searchParams = useSearchParams()

  const searchQuery = searchParams.get('search') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)

  const [posts, setPosts] = useState<BlogPost[]>([])
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts: fetchedPosts, pagination } = await getAllPosts(
          page,
          searchQuery
        )
        setPosts(fetchedPosts)
        setTotalPages(pagination.pageCount)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [page, searchQuery])

  const breadcrumbs = [
    { name: 'Home', href: '/', isCurrentPage: false },
    { name: 'Insight', href: '/blogs', isCurrentPage: true },
  ]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-4 md:mx-6 lg:mx-12 mt-21 xl:mx-21">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1 className="text-center text-4xl text-heading font-bold mb-16">
          Nexoris Blog
        </h1>

        {posts.length === 0 ? (
          <p className="text-gray-400">No posts available at the moment.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            <ClientPagination currentPage={page} totalPages={totalPages} />
          </>
        )}
      </div>
    </Suspense>
  )
}
