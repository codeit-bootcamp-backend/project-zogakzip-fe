import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'
import { MOCK_POSTS, MOCK_POST_DETAIL } from './mocks'

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
]

export default postsHandler
