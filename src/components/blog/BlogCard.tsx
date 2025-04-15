'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/types'

type BlogCardProps = {
  post: BlogPost
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="cursor-pointer bg-background rounded-lg overflow-hidden shadow-md shadow-gray-300 hover:shadow-lg transition-shadow w-full">
      <Link href={`/blogs/${post.slug}`} className="block">
        {post.cover?.url && (
          <div className="relative w-full h-36">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.cover.url}`}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold line-clamp-2 text-heading">
            {post.title}
          </h3>
          <p className="mt-2 text-base leading-6 line-clamp-3 text-text">
            {post.description}
          </p>
          <p className="text-heading text-base mt-4 inline-block font-medium hover:underline">
            Read More
          </p>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
