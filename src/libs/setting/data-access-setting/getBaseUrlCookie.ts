'use server'

import { cookies } from 'next/headers'

const getBaseUrlCookie = async () => {
  const cookieStore = cookies()
  return cookieStore.get('baseUrl')?.value
}

export default getBaseUrlCookie
