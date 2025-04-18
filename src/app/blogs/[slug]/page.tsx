'use client'

import { useEffect, useState } from 'react'
import { getPostBySlug } from '../../../lib/api'
import { useRouter, useParams } from 'next/navigation'
import { BlogPost } from '@/lib/types'
import moment from 'moment'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image' // ✅ Import Next.js Image

const BlogPostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug || Array.isArray(slug)) return

      try {
        const fetchedPost = await getPostBySlug(slug)
        setPost(fetchedPost)
      } catch (err) {
        setError('Error fetching post.')
        console.error(err)
      }
    }

    fetchPost()
  }, [slug])

  const breadcrumbs = [
    { name: 'Home', href: '/', isCurrentPage: false },
    { name: 'Insight', href: '/blogs', isCurrentPage: false },
    {
      name: typeof slug === 'string' ? slug.replace(/-/g, ' ') : 'Post',
      href: '#',
      isCurrentPage: true,
    },
  ]

  return (
    <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21">
      <section>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </section>
      <div className="min-h-screen max-w-screen-md mx-auto p-4">
        {error && <p>Error: {error}</p>}
        {!post && !error && <p>Loading...</p>}

        {post && (
          <>
            <h1 className="text-4xl leading-[60px] capitalize text-center font-bold text-purple-800 font-jet-brains">
              {post.title}
            </h1>

            <div className="w-full flex items-center justify-center font-light">
              Published: {moment(post.createdAt).fromNow()}
            </div>

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap space-x-2 my-4">
                {post.categories.map(({ name, documentId }) => (
                  <span
                    key={documentId}
                    className="border border-purple-900 font-medium px-2 py-2 text-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            )}

            {post.cover && (
              <div className="relative h-72 w-full my-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.cover.url}`}
                  alt={post.title}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority
                />
              </div>
            )}

            <div
              className="prose prose-invert max-w-none text-text text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <button
              onClick={() => router.back()}
              className="text-heading mt-4 inline-block hover:underline mt-12 font-semibold cursor-pointer"
            >
              Back to Blogs
            </button>
          </>
        )}
      </div>
    </main>
  )
}

export default BlogPostPage
