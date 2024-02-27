const addBasePrefix = (path: string): string => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
}

export default addBasePrefix
