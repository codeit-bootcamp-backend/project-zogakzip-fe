'use client'

import { useCallback, useEffect, useState } from 'react'

type AsyncState<T> = {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

const useAsync = <T>(asyncFunction: () => Promise<T>, deps: any[] = []): AsyncState<T> => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    isLoading: true,
  })

  const execute = useCallback(() => {
    setState({ data: null, error: null, isLoading: true })
    asyncFunction()
      .then(data => setState({ data, error: null, isLoading: false }))
      .catch(error => setState({ data: null, error, isLoading: false }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  useEffect(() => {
    execute()
  }, [execute])

  return state
}

export default useAsync
