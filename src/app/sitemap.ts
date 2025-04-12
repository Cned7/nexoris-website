import { NextApiRequest, NextApiResponse } from 'next'
import { format } from 'date-fns'
import { SitemapStream, streamToPromise } from 'sitemap'

// Helper function to get the current date in ISO format
const getCurrentDate = () => format(new Date(), 'yyyy-MM-dd')

// Fetching dynamic blog posts from a static file or API
const fetchDynamicUrls = async () => {
  // Simulate fetching dynamic blog slugs
  const blogPostSlugs = ['post-1', 'post-2', 'post-3'] 

  return blogPostSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    lastmod: getCurrentDate(),
    changefreq: 'weekly',
    priority: 0.8,
  }))
}

const generateSitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Create a new SitemapStream instance
    const sitemap = new SitemapStream({ hostname: 'https://nexoristech.com' })

    // Static URLs - these would need to be manually added/updated
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
        url: '/blog',
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

    // Convert the sitemap stream to a promise and send the response
    const sitemapXml = await streamToPromise(sitemap)
    res.setHeader('Content-Type', 'application/xml')
    res.setHeader(
      'Cache-Control',
      'public, max-age=86400, stale-while-revalidate=86400'
    ) // Cache for 1 day
    res.status(200).send(sitemapXml)
  } catch (error) {
    // Error handling
    console.error('Error generating sitemap:', error)
    res.status(500).send('Internal Server Error')
  }
}

export default generateSitemap
