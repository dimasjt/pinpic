export default (errors: any[]) => {
  let newErrors = {}
  errors.forEach(({ attribute, message, type }) => {
    if (attribute && message && type === 'form')
      newErrors[attribute] = (newErrors[attribute] || []).concat(message)
  })

  return newErrors
}