'use client'

import { Fragment } from 'react'
import initMocks from './msw/initMocks'

type ProvidersProps = {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  // Provider: MSW

  if (process.env.NODE_ENV === 'development') {
    initMocks()
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Providers
