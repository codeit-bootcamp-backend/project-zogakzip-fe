'use client'

import { usePathname, useSearchParams } from 'next/navigation'

const useUpdateQueryURL = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateQueryURL = (updates: Record<string, string | number>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([name, value]) => {
      params.set(name, value.toString())
    })

    return `${pathname}?${params.toString()}`
  }

  return { updateQueryURL }

}

export default useUpdateQueryURL
