import Link from 'next/link'

export function ConsultingCtaSection() {
  return (
    <aside className="mt-10 lg:mt-15 w-full flex items-center justify-center pb-8">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-heading text-center">
          Ready to Achieve Your Business Goals?
        </h2>
        <div className="text-center text-lg text-text">
          <p className="my-4">
            At Nexoris Technologies Ltd, we specialize in driving real results
            through digital transformation, strategic product management, and
            SEO. Let&apos;s work together to turn your vision into a reality.
          </p>
          <p>
            <strong>CONTACT US TODAY</strong> to book a consultation and explore
            how we can help you grow.
          </p>
          <Link
            href="/contact-us"
            className="inline-block px-4 py-3 text-secondary-text bg-button hover:bg-hover font-semibold rounded-xl transition-transform duration-300 hover:scale-105 mt-8"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </aside>
  )
}
