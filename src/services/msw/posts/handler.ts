import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'
import { MOCK_MEMORIES, MOCK_MEMORY_DETAIL } from './mocks'

const postsHandler = [
  http.get(addBasePrefix('/groups/:groupId/posts'), async () => {
    await delay()
    return HttpResponse.json(MOCK_MEMORIES)
    // return HttpResponse.json(MOCK_PRIVATE_MEMORIES)
  }),
  http.get(addBasePrefix('/posts/:postId'), async () => {
    await delay()
    return HttpResponse.json(MOCK_MEMORY_DETAIL)
  }),
]

export default postsHandler
