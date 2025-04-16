'use client'

import { useEffect, useState } from 'react'
import { getPostBySlug } from '../../../lib/api'
import { useRouter, useParams } from 'next/navigation'
import { BlogPost } from '@/lib/types'
import moment from 'moment'

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

  return (
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
              <img
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.cover.url}`}
                alt={post.title}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          )}

          <p className="text-gray-300 leading-[32px] tracking-wide italic mt-2 mb-6">
            {post.description}
          </p>

          {/* Render CKEditor content from Strapi */}
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <button
            onClick={() => router.back()}
            className="text-purple-800 mt-4 inline-block hover:underline"
          >
            Back to Blogs
          </button>
        </>
      )}
    </div>
  )
}

export default BlogPostPage
