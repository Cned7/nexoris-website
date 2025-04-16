'use client'

import { useEffect, useState, use } from 'react'
import { getPostBySlug } from '../../../lib/api'
import { useRouter } from 'next/navigation'
import { BlogPost } from '@/lib/types'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'

const BlogPostPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        try {
          const fetchedPost = await getPostBySlug(slug)
          setPost(fetchedPost)
        } catch (err) {
          setError('Error fetching post.')
          console.log(err)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchPost()
  }, [slug])

  if (loading)
    return (
      <div className="max-w-screen-md mx-auto flex items-center justify-center"></div>
    )

  if (error) return <p className="max-w-screen-md mx-auto">Error: {error}</p>

  if (!post) return <p className="max-w-screen-md mx-auto">No post found.</p>

  const breadcrumbs = [
    { name: 'Home', href: '/', isCurrentPage: false },
    { name: 'Insight', href: '/blogs', isCurrentPage: false },
    { name: post.title, href: `/blogs/${post.slug}`, isCurrentPage: true },
  ]

  return (
    <main className="mx-4 md:mx-6 lg:mx-12 mt-20 lg:mt-28 xl:mx-21 bg-secondary-background">
      <section>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </section>
      <div className="max-w-screen-lg mx-auto py-4">
        <h1 className="text-4xl leading-[60px] capitalize text-center font-bold text-heading font-jet-brains">
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
              className="rounded-lg w-full h-full object-cover"
              fill
            />
          </div>
        )}

        <div className="prose prose-invert max-w-screen-lg leading-[40px]">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="ck-content"
          />
        </div>

        <button
          onClick={() => router.back()}
          className="text-purple-800 mt-4 inline-block hover:underline"
        >
          Back to Blogs
        </button>
      </div>
    </main>
  )
}

export default BlogPostPage
