import { HttpResponse, delay, http } from 'msw'
import addBasePrefix from '../util/addBasePrefix'

const imageHandler = [
  http.post(addBasePrefix('/image'), async () => {
    await delay()
    return HttpResponse.json({
      imageUrl: '/images/image-example.png',
    })
  }),
]

export default imageHandler
