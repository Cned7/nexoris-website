import { NextResponse } from 'next/server'
import { format } from 'date-fns'
import { SitemapStream, streamToPromise } from 'sitemap'
import fs from 'fs'
import path from 'path'

// Helper function to get the current date in ISO format
const getCurrentDate = () => format(new Date(), 'yyyy-MM-dd')

// Dynamically fetching URLs from files in a directory
const fetchDynamicUrls = async () => {
  const blogDirectory = path.join(process.cwd(), 'posts')

  try {
    // Check if the directory exists before trying to read it
    if (!fs.existsSync(blogDirectory)) {
      console.log(
        `Directory ${blogDirectory} does not exist, skipping dynamic URLs fetching.`
      )
      return []
    }

    const fileNames = fs.readdirSync(blogDirectory)

    // Generate URLs for each blog post based on file names
    return fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      return {
        url: `/blogs/${slug}`,
        lastmod: getCurrentDate(),
        changefreq: 'weekly',
        priority: 0.8,
      }
    })
  } catch (error) {
    console.error('Error reading blog directory:', error)
    return []
  }
}

export async function GET() {
  try {
    // Create a new SitemapStream instance
    const sitemap = new SitemapStream({ hostname: 'https://nexoristech.com' })

    // Static URLs
    const staticUrls = [
      {
        url: '/',
        lastmod: getCurrentDate(),
        changefreq: 'daily',
        priority: 1.0,
      },
      {
        url: '/about-us',
        lastmod: getCurrentDate(),
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        url: '/contact-us',
        lastmod: getCurrentDate(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        url: '/software-development',
        lastmod: getCurrentDate(),
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        url: '/digital-experience-design',
        lastmod: getCurrentDate(),
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        url: '/marketing-and-analytics',
        lastmod: getCurrentDate(),
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        url: '/consulting-and-innovation',
        lastmod: getCurrentDate(),
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        url: '/blogs',
        lastmod: getCurrentDate(),
        changefreq: 'daily',
        priority: 0.6,
      },
    ]

    // Fetch dynamic URLs (e.g., blog posts)
    const dynamicUrls = await fetchDynamicUrls()

    // Combine static and dynamic URLs
    const allUrls = [...staticUrls, ...dynamicUrls]

    // Add each URL to the sitemap stream
    allUrls.forEach((url) => {
      sitemap.write(url)
    })

    // End the sitemap stream
    sitemap.end()

    // Convert the sitemap stream to a promise
    const sitemapXml = await streamToPromise(sitemap)

    // Return the response with the appropriate headers
    return NextResponse.json(sitemapXml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400', // Cache for 1 day
      },
    })
  } catch (error) {
    // Error handling
    console.error('Error generating sitemap:', error)
    return NextResponse.json('Internal Server Error', { status: 500 })
  }
}
