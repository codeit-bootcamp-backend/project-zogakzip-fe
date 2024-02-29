const formatLikeCount = (count: number): string => {
  return count.toLocaleString('en', { maximumFractionDigits: 1, notation: 'compact' })
}

export default formatLikeCount
