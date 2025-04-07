// components/Breadcrumbs.tsx
import Link from 'next/link'

type Breadcrumb = {
  name: string
  href: string
  isCurrentPage: boolean
}

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <nav className="bg-background py-2 my-4 w-full">
      <ol className="flex space-x-4 text-base font-medium text-heading">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {breadcrumb.isCurrentPage ? (
              <span className="text-heading">{breadcrumb.name}</span>
            ) : (
              <Link href={breadcrumb.href} className="hover:text-hover">
                {breadcrumb.name}
              </Link>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 text-heading">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
