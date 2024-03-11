import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'
import { MOCK_IS_PUBLIC_POST, MOCK_POSTS, MOCK_POST_DETAIL } from './mocks'

const postsHandler = [
  http.get(addBasePrefix('/groups/:groupId/posts'), async () => {
    await delay()
    return HttpResponse.json(MOCK_POSTS)
    // return HttpResponse.json(MOCK_PRIVATE_POSTS)
  }),
  http.get(addBasePrefix('/posts/:postId'), async () => {
    await delay()
    return HttpResponse.json(MOCK_POST_DETAIL)
  }),
  http.get(addBasePrefix('/posts/:postId/is-public'), async () => {
    await delay()
    return HttpResponse.json(MOCK_IS_PUBLIC_POST)
  }),
  http.post(addBasePrefix('/posts/:postId/verify-password'), async ({ request }) => {
    await delay()
    const body = await request.json() as { password: string }
    if (body.password !== 'asdf1234') {
      return HttpResponse.json({ message: '비밀번호가 일치하지 않습니다.' }, { status: 401 })
    }
    return HttpResponse.json({ message: '비밀번호가 일치합니다.' }, { status: 200 })
  }),
]

export default postsHandler
