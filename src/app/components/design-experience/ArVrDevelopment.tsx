import Image from 'next/image'
import Link from 'next/link'

export function ARVRDevelopment() {
  return (
    <section
      className="bg-background text-white mt-10 lg:mt-15 bg-secondary-background"
      id="arvr-development"
    >
      <div className="flex justify-between flex-col lg:flex-row gap-8 px-4  mt-4 lg:px-8 lg:pb-8 pt-3 container mx-auto">
        <div className="relative flex lg:w-1/2 w-full justify-start my-auto pt-8">
          <Image
            src="/images/ar-av.webp"
            alt="Product Design"
            height={300}
            width={700}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
        <div className="text-text font-lg flex flex-col lg:w-1/2 w-full justify-center">
          <h2 className="text-heading text-4xl font-bold text-center pt-8 mb-8">
            AR/VR Development
          </h2>
          <p className="text-text font-body text-lg">
            Create immersive digital experiences for education, retail,
            training, and entertainment. Using Unity, Unreal Engine, and WebXR,
            we build next-gen AR and VR applications that drive engagement and
            push boundaries.
          </p>
          <Link
            href="/contact-us"
            className="text-heading underline mt-4 font-semibold pb-8"
          >
            Let&apos;s bring your ideas to life
          </Link>
        </div>
      </div>
    </section>
  )
}
