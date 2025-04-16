'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import Pagination from './Pagination'

interface ClientPaginationProps {
  currentPage: number
  totalPages: number
}

export default function ClientPagination({
  currentPage,
  totalPages,
}: ClientPaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString())
    params.set('page', newPage.toString())
    router.push(`?${params.toString()}`)
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  )
}
