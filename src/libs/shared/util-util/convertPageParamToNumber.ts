const convertPageParamToNumber = (pageParam?: string) => {
  return (Number.isNaN(Number(pageParam)) || Number(pageParam) < 1)
    ? 1
    : Math.floor(Number(pageParam))
}

export default convertPageParamToNumber
