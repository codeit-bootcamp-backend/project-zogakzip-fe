const convertIdParamToNumber = (id?: string): number => {
  return isNaN(Number(id)) ? 0 : Number(id)
}

export default convertIdParamToNumber
