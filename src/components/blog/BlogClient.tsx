// src/components/blog/BlogPostClient.tsx

'use client' 

import { FC } from 'react'

interface BlogPostClientProps {
  post: {
    title: string
    content: string
  }
}

const BlogPostClient: FC<BlogPostClientProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Render more details of the post */}
    </div>
  )
}

export default BlogPostClient
