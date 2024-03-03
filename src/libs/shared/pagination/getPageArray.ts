import { PAGINATION_SIBLING_COUNT } from './constants'

const getPageArray = (page: number, totalPage: number, siblingCount: number = PAGINATION_SIBLING_COUNT) => {
  const countInRow = Math.min(totalPage, siblingCount)
  const startForCurrentPage = Math.max(1, page - Math.floor(countInRow / 2))
  const lastStartPage = totalPage - countInRow + 1
  const startPage = Math.min(startForCurrentPage, lastStartPage)
  return Array.from({ length: countInRow }, (_, x) => x + startPage)
}

export default getPageArray
