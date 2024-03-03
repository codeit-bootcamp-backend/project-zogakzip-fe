import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'
import { MOCK_COMMENTS } from './mocks'

const commentsHandler = [
  http.get(addBasePrefix('/posts/:postId/comments'), async () => {
    await delay()
    return HttpResponse.json(MOCK_COMMENTS)
  }),
]

export default commentsHandler
