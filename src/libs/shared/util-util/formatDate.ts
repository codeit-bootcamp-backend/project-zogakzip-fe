const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ko',
    {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    }).slice(0, -1)
}

export default formatDate
