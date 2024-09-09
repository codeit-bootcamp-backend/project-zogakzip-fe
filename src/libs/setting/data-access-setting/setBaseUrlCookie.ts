'use server'

import { BaseUrlSettingFormInput } from '@services/api/types'
import { cookies } from 'next/headers'

const setBaseUrlCookie = async (data: BaseUrlSettingFormInput) => {
  const cookieStore = cookies()
  cookieStore.set('baseUrl', data.baseUrl)
}

export default setBaseUrlCookie
