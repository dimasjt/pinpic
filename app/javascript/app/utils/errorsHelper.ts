export default (errors: any[]) => {
  let newErrors = {}
  errors.forEach(({ attribute, message }) => {
    if (attribute && message)
      newErrors[attribute] = (newErrors[attribute] || []).concat(message)
  })

  return newErrors
}