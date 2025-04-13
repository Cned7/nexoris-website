import Link from 'next/link'

export function DesignCtaSection() {
  return (
    <aside className="mt-10 lg:mt-15 w-full flex items-center justify-center pb-8">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-heading text-center">
          Your Vision, Our Expertise
        </h2>
        <div className="text-center text-lg text-text">
          <p className="my-4">
            Let&apos;s build a digital product that&apos;s as effective as it is
            beautiful. At Nexoris Technologies Ltd, we combine world-class
            design with real-world usability.
          </p>
          <p>
            <strong>CONTACT US TODAY</strong> to schedule a discovery session
            and explore how our Design & Product services can bring your vision
            to life.
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
