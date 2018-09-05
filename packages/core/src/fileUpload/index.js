import "isomorphic-fetch"
import { ApiLocation } from "../api"

const uploadImage = async (file, token) => {
  const data = new FormData()
  data.append("file", file)
  const response = await fetch(`${ApiLocation}/api/uploads/upload/`, {
    method: "post",
    body: data,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    alert("Error, could not upload file")
    return { error: response }
  } else {
    const json = await response.json()
    return { data: json }
  }
}

export default {
  uploadImage
}
