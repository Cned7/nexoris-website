// app/privacy-policy/page.tsx
'use client'

import { useEffect, useState } from 'react'

const PrivacyPolicyPage = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState<string | null>(null)
  const [title, setTitle] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const response = await fetch(
          'http://localhost:1337/api/privacy-policy?populate=*'
        )
        const data = await response.json()

        // Check if the content exists and set it
        if (data?.data?.attributes?.content) {
          setPrivacyPolicy(data.data.attributes.content)
        } else {
          console.error('Privacy policy content not found')
        }

        // Check if the title exists and set it
        if (data?.data?.attributes?.title) {
          setTitle(data.data.attributes.title)
        } else {
          console.error('Privacy policy title not found')
        }

        setLoading(false) // Set loading to false when data has been fetched
      } catch (error) {
        console.error('Error fetching Privacy Policy:', error)
        setLoading(false) // Handle error and stop loading
      }
    }

    fetchPrivacyPolicy()
  }, [])

  // Render loading message or actual content
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{title ? title : 'Privacy Policy'}</h1>
      {privacyPolicy ? (
        <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
      ) : (
        <p>Sorry, there was an error loading the privacy policy content.</p>
      )}
    </div>
  )
}

export default PrivacyPolicyPage
