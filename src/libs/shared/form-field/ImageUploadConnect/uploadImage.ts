import { postRequest } from '@services/api/requests'

type ImageUploadRequest = {
  image: File
}

type ImageUploadResponse = {
  imageUrl: string
}

const SIZE_LIMIT_MB = 5
const BYTES_IN_MEGABYTES = 1024 * 1024

const uploadImage = async (file: File) => {
  if (file.size > SIZE_LIMIT_MB * BYTES_IN_MEGABYTES) {
    alert('파일 사이즈가 너무 큽니다. 5MB 이하의 파일을 업로드해주세요.')
    return
  }

  try {
    const response = await postRequest<ImageUploadResponse, ImageUploadRequest>('/image', { image: file }, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.imageUrl

  } catch (error) {
    alert('파일 업로드에 실패했습니다. 다시 시도해주세요.')
  }
}

export default uploadImage
