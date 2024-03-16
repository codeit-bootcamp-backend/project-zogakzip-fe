'use client'

import { Fragment } from 'react'
import initMocks from './msw/initMocks'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  // Provider: MSW

  if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_MOCK_ENABLED === 'true') {
    initMocks()
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Providers
