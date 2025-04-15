'use client'

import Image from 'next/image'
import Link from 'next/link'

// Define an interface for the cover image
interface CoverImage {
  url: string
  alternativeText?: string
}

// Define an interface for the attributes of the blog post
interface BlogPostAttributes {
  title: string
  content: string
  coverImage?: CoverImage
}

// Define the BlogPostProps interface to type the post prop
interface BlogPostProps {
  post: {
    attributes: BlogPostAttributes
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  const { title, content, coverImage } = post.attributes

  return (
    <section className="p-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog">
          <a className="text-blue-500 mb-4 inline-block">Back to Blog</a>
        </Link>

        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        {coverImage && coverImage.url && (
          <div className="mb-4">
            <Image
              src={coverImage.url}
              alt={coverImage.alternativeText || 'Cover image'}
              width={1200}
              height={600}
              className="w-full rounded-lg"
            />
          </div>
        )}

        <div className="prose">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </section>
  )
}
