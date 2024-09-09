import getBaseUrlCookie from '@libs/setting/data-access-setting/getBaseUrlCookie'
import { redirect } from 'next/navigation'

const addBaseUrlPrefix = async (path: string) => {
  // 참고: 클라이언트에서 getBaseUrlCookie 사용 시 Promise를 반환하므로 await를 사용
  const baseUrl = await getBaseUrlCookie()
  if (!baseUrl) {
    alert('baseUrl이 설정되지 않았습니다. Url 설정 페이지로 이동합니다.')
    redirect('/')
  }
  return path.startsWith('/') ? `${baseUrl}${path}` : `${baseUrl}/${path}`
}

export default addBaseUrlPrefix
