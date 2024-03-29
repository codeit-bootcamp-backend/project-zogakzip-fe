const addBaseUrlPrefix = (url: string) => {
  return url.startsWith('/') ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`
}

const requestInterceptor = (url: string, method: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🚀 [API] ${method} ${url} | Request`)
  }
}

const responseInterceptor = (url: string, method: string, response: Response) => {
  if (process.env.NODE_ENV === 'development') {
    if (response.ok) {
      console.log(`🚁 [API] ${method} ${url} | Response ${response.status}`)
    } else {
      console.log(`🚨 [API] ${method} ${url} | Error ${response.status} ${response.statusText}`)
    }
  }
}

export const getRequest = async <T>(url: string, config?: RequestInit): Promise<T> => {
  requestInterceptor(url, 'GET')
  const response = await fetch(addBaseUrlPrefix(url), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  })
  responseInterceptor(url, 'GET', response)

  if (!response.ok) {
    let errorMessage = '알 수 없는 오류가 발생했습니다'
    try {
      const errorData = await response.json()
      errorMessage = errorData.message
    } catch (error) {
    }
    return Promise.reject(new Error(`${response.status}: ${errorMessage}`))
  }

  return response.json() as Promise<T>
}

export const postRequest = async <T, B>(url: string, body?: B, config?: RequestInit): Promise<T> => {
  requestInterceptor(url, 'POST')
  const response = await fetch(addBaseUrlPrefix(url), {
    method: 'POST',
    body: body instanceof FormData ? body : JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  })
  responseInterceptor(url, 'POST', response)

  if (!response.ok) {
    let errorMessage = '알 수 없는 오류가 발생했습니다'
    try {
      const errorData = await response.json()
      errorMessage = errorData.message
    } catch (error) {
    }
    return Promise.reject(new Error(`${response.status}: ${errorMessage}`))
  }

  return response.json() as Promise<T>
}

export const putRequest = async <T, B>(url: string, body: B, config?: RequestInit): Promise<T> => {
  requestInterceptor(url, 'PUT')
  const response = await fetch(addBaseUrlPrefix(url), {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  })
  responseInterceptor(url, 'PUT', response)

  if (!response.ok) {
    let errorMessage = '알 수 없는 오류가 발생했습니다'
    try {
      const errorData = await response.json()
      errorMessage = errorData.message
    } catch (error) {
    }
    return Promise.reject(new Error(`${response.status}: ${errorMessage}`))
  }

  return response.json() as Promise<T>
}

export const deleteRequest = async <T, B>(url: string, body?: B, config?: RequestInit): Promise<T> => {
  requestInterceptor(url, 'DELETE')
  const response = await fetch(addBaseUrlPrefix(url), {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  })
  responseInterceptor(url, 'DELETE', response)

  if (!response.ok) {
    let errorMessage = '알 수 없는 오류가 발생했습니다'
    try {
      const errorData = await response.json()
      errorMessage = errorData.message
    } catch (error) {
    }
    return Promise.reject(new Error(`${response.status}: ${errorMessage}`))
  }

  return response.json() as Promise<T>
}

export const patchRequest = async <T, B>(url: string, body: B, config?: RequestInit): Promise<T> => {
  requestInterceptor(url, 'PATCH')
  const response = await fetch(addBaseUrlPrefix(url), {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
    ...config,
  })
  responseInterceptor(url, 'PATCH', response)

  if (!response.ok) {
    let errorMessage = '알 수 없는 오류가 발생했습니다'
    try {
      const errorData = await response.json()
      errorMessage = errorData.message
    } catch (error) {
    }
    return Promise.reject(new Error(`${response.status}: ${errorMessage}`))
  }

  return response.json() as Promise<T>
}
