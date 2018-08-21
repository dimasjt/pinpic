const setToken = (token): void => {
  localStorage.setItem('token', token)
}

const getToken = () => (
  localStorage.getItem('token')
)

const removeToken = (): void => {
  localStorage.removeItem('token')
}

export {
  setToken,
  removeToken,
  getToken,
}