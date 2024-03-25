const initMocks = async () => {
  const isServer = typeof window === 'undefined'

  /**
 * TODO-3: redundant worker 선언 문제 해결
 * Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.
 */
  if (isServer) {
    const { serverWorker } = await import('./server')
    serverWorker.listen({ onUnhandledRequest: 'bypass' }) // 처리되지 않은 요청이라도 통과시키도록
  } else {
    const { browserWorker } = await import('./browser')
    await browserWorker.start({ onUnhandledRequest: 'bypass' })
  } // 참고: 처리되지 않은 요청이라도 통과시키도록
}

export default initMocks
