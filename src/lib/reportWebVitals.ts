// lib/reportWebVitals.ts
import { onCLS, onFID, onLCP, Metric } from 'web-vitals'

// This function can be triggered by Next.js to collect and report metrics
export const reportWebVitals = ({
  id,
  name,
  value,
  delta,
  entries,
}: Metric) => {
  // Log Web Vitals metrics for development purposes
  console.log(`[Web Vitals] ${name} (${id}): ${value}, Delta: ${delta}`)

  // Optionally: Send the Web Vitals data to your custom backend (e.g., Google Analytics or custom logging)
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      id,
      name,
      value,
      delta,
      entries,
      timestamp: Date.now(),
    }),
    headers: { 'Content-Type': 'application/json' },
    keepalive: true,
  }).catch((err) => {
    console.error('Failed to send CWV metric:', err)
  })
}

// Call the Web Vitals functions in the browser to collect the metrics
if (typeof window !== 'undefined') {
  onCLS(reportWebVitals) // Measure Cumulative Layout Shift
  onFID(reportWebVitals) // Measure First Input Delay
  onLCP(reportWebVitals) // Measure Largest Contentful Paint
}
