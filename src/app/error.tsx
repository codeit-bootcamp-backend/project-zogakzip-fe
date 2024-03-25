'use client'

import UiError from '@libs/shared/Error/UiError'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
}

const Error = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return <UiError type='error' />
}

export default Error
