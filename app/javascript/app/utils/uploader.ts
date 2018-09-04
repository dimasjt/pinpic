const upload = (files: File[]) => {
  const formData = new FormData()

  files.forEach(file => {
    formData.append('files[]', file, file.name)
  })

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
