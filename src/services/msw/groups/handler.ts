import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'
import { MOCK_PUBLIC_GROUPS, MOCK_GROUP_DETAIL } from './mocks'

const groupsHandler = [
  http.get(addBasePrefix('/groups'), async () => {
    await delay()
    return HttpResponse.json(MOCK_PUBLIC_GROUPS)
  }),
  http.get(addBasePrefix('/groups/:groupId'), async () => {
    await delay()
    return HttpResponse.json(MOCK_GROUP_DETAIL)
  }),
]

export default groupsHandler
