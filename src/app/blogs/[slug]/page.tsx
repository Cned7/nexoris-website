// app/blogs/[slug]/page.tsx.
'use client'
import { useEffect, useState, use } from 'react'
import { getPostBySlug } from '../../../lib/api' // Import your API function
import { useRouter } from 'next/navigation'
import { BlogPost } from '@/lib/types'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { FaClipboard } from 'react-icons/fa' // Import your chosen icon
import moment from 'moment'
import { toast } from 'react-hot-toast'

const handleCopyCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code)
    toast.success('Code copied to clipboard!') // Show toast on error
  } catch (err) {
    console.error('Failed to copy code: ', err)
  }
}

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
          // Fetch the post using the slug
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
  console.log(post)
  return (
    <div className="max-w-screen-md mx-auto p-4 mt-28">
      <h1 className="text-4xl leading-[60px] capitalize text-center font-bold text-heading font-jet-brains">
        {post.title}
      </h1>
      <div className="w-full flex items-center justify-center font-light">
        Published: {moment(post.createdAt).fromNow()}
      </div>

      {/* Categories Section */}
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
      <div className={'leading-[40px] max-w-screen-lg prose prose-invert'}>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '')
              const codeString = String(children).replace(/\n$/, '')

              return !inline && match ? (
                <div className="relative">
                  <button
                    onClick={() => handleCopyCode(codeString)}
                    className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-md hover:bg-gray-600"
                    title="Copy to clipboard"
                  >
                    <FaClipboard color="#fff" />
                  </button>
                  <SyntaxHighlighter
                    style={dracula}
                    PreTag="div"
                    language={match[1]}
                    {...props}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post.content}
        </Markdown>
      </div>
      <button
        onClick={() => router.back()}
        className="text-purple-800 mt-4 inline-block hover:underline"
      >
        Back to Blogs
      </button>
    </div>
  )
}

export default BlogPostPage
