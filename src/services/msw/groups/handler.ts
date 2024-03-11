import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'
import { MOCK_GROUPS, MOCK_GROUP_DETAIL, MOCK_IS_PUBLIC_GROUP } from './mocks'

const groupsHandler = [
  http.get(addBasePrefix('/groups'), async () => {
    await delay()
    return HttpResponse.json(MOCK_GROUPS)
    // return HttpResponse.json(MOCK_PRIVATE_GROUPS)
  }),
  http.get(addBasePrefix('/groups/:groupId'), async () => {
    await delay()
    return HttpResponse.json(MOCK_GROUP_DETAIL)
  }),
  http.get(addBasePrefix('/groups/:groupId/is-public'), async () => {
    await delay()
    return HttpResponse.json(MOCK_IS_PUBLIC_GROUP)
  }),
  http.post(addBasePrefix('/groups/:groupId/verify-password'), async ({ request }) => {
    await delay()
    const body = await request.json() as { password: string }
    if (body.password !== 'asdf1234') {
      return HttpResponse.json({ message: '비밀번호가 일치하지 않습니다.' }, { status: 401 })
    }
    return HttpResponse.json({ message: '비밀번호가 일치합니다.' }, { status: 200 })
  }),
]

export default groupsHandler
