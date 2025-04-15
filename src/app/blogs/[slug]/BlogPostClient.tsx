// src/app/blog/[slug]/BlogPostClient.tsx
'use client' // Add this line to mark this component as a client-side component

import { useEffect, useState } from 'react'

// Define an interface for the blog post
interface BlogPost {
  title: string
  excerpt: string
  // Add other fields that are present in your blog post data
}

const BlogPostClient = ({ slug }: { slug: string }) => {
  // Use the BlogPost interface for the state type
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
        )
        const data = await res.json()
        if (data?.data?.length > 0) {
          setPost(data.data[0]) // Set the first post found
        } else {
          console.log('Post not found')
        }
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }

    fetchPost()
  }, [slug])

  if (!post) {
    return <div>Loading blog post...</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      {/* Add more post content as needed */}
    </div>
  )
}

export default BlogPostClient
