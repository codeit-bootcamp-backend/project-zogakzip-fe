import { postRequest } from '@services/api/requests'

type ImageUploadRequest = FormData

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
    const formData = new FormData()
    formData.append('image', file)
    // 참고: header 형식으로 multipart/form-data를 명시하면 오히려 boundary가 붙지 않아 오류가 발생함
    const response = await postRequest<ImageUploadResponse, ImageUploadRequest>('/image', formData, {
      headers: undefined,
    })
    return response.imageUrl

  } catch (error) {
    console.dir(error)
    alert('파일 업로드에 실패했습니다. 다시 시도해주세요.')
  }
}

export default uploadImage
