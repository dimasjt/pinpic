const upload = (file: File) => {
  const formData = new FormData()
  formData.append('file', file, file.name)

  const token = localStorage.getItem("token")

  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`
    },
    body: formData,
  }

  return new Promise((resolve, reject) => {
    fetch("/api/upload", options)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}

export default upload
