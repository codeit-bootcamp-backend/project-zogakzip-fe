import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'

const groupsHandler = [
  http.get(addBasePrefix('/groups'), async () => {
    await delay()
    return HttpResponse.json()
  }),
]

export default groupsHandler
