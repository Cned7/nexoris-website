/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getAllPosts } from '@/lib/api'
import { BlogPost } from '@/lib/types'
import Pagination from '@/components/Pagination'
import BlogCard from '@/components/blog/BlogCard'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalPages, setTotalPages] = useState(1)

  const searchParams = useSearchParams()
  const router = useRouter()

  const searchQuery = searchParams.get('search') ?? ''
  const pageParam = searchParams.get('page')
  const currentPage = pageParam ? parseInt(pageParam) : 1

  useEffect(() => {
    const fetchPosts = async (page: number) => {
      try {
        const { posts, pagination } = await getAllPosts(page, searchQuery)
        setPosts(posts)
        setTotalPages(pagination.pageCount)
      } catch (error) {
        setError('Error fetching posts. Please try again later.')
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts(currentPage)
  }, [currentPage, searchQuery])

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString())
    newParams.set('page', newPage.toString())
    router.push(`?${newParams.toString()}`)
    setLoading(true)
  }

  const breadcrumbs = [
    { name: 'Home', href: '/', isCurrentPage: false },
    {
      name: 'Insight',
      href: '/blogs',
      isCurrentPage: true,
    },
  ]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-4 md:mx-6 lg:mx-12 mt-28 lg:mt-36 xl:mx-21">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <h1 className="text-center text-4xl text-heading font-bold mb-16">
          Nexoris Blog
        </h1>

        {loading && !error && (
          <div className="w-full flex items-center justify-center">
            Loading posts...
          </div>
        )}

        {error && <p>{error}</p>}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.length > 0 ? (
                posts.map((post) => <BlogCard key={post.id} post={post} />)
              ) : (
                <p className="text-gray-400">
                  No posts available at the moment.
                </p>
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </Suspense>
  )
}
