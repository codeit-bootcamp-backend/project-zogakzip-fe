import { URL_VALIDATION_REGEXP } from '@libs/shared/util-constants/constants'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const middleware = (request: NextRequest) => {
  const { pathname, searchParams } = request.nextUrl

  // 참고: baseUrl 쿼리를 설정했는지 확인하고 쿠키에 저장
  const baseUrlSearchParams = searchParams.get('baseUrl')
  if (baseUrlSearchParams && URL_VALIDATION_REGEXP.test(baseUrlSearchParams)) {
    const response = NextResponse.redirect(new URL('/', request.url))
    response.cookies.set('baseUrl', baseUrlSearchParams)
    return response
  }

  // 참고: baseUrl 쿠키가 없으면 baseUrl 설정 페이지('/')로 이동
  const cookie = request.cookies.get('baseUrl')
  if (!cookie && pathname !== '/setting') {
    return NextResponse.redirect(new URL('/setting', request.url))
  }

  // 참고: baseUrl 쿠키가 있으면 그대로 진행
  return NextResponse.next()
}

export default middleware

export const config = {
  matcher: '/((?!api|_next/static|_next/image|images|favicon.ico|mockServiceWorker.js).*)',
}
