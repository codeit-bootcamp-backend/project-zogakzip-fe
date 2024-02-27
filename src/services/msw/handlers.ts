import groupsHandler from './groups/handler'

// TODO: url에 baseURL을 붙여주는 로직, 내부 공통 로직을 분리하는 로직이 필요함
const handlers = [
  ...groupsHandler,
]

export default handlers
