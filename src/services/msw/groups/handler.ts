import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'
import { MOCK_GROUP_DETAIL, MOCK_PRIVATE_GROUPS } from './mocks'

const groupsHandler = [
  http.get(addBasePrefix('/groups'), async () => {
    await delay()
    // return HttpResponse.json(MOCK_GROUPS)
    return HttpResponse.json(MOCK_PRIVATE_GROUPS)
  }),
  http.get(addBasePrefix('/groups/:groupId'), async () => {
    await delay()
    return HttpResponse.json(MOCK_GROUP_DETAIL)
  }),
]

export default groupsHandler
