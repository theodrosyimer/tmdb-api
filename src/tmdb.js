export const searchByID = async (id) => {
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=videos,images`).catch((e) => {
    if (!response.ok) {
      throw new Error(`Returned with a ${response.status} code`)
    }
    console.error(e.message)
  })

  let data = await response.json()
  return data
}

export const searchByTitle = async (query) => {
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`).catch((e) => {
    if (!response.ok) {
      throw new Error(`Returned with a ${response.status} code`)
    }
    console.error(e.message)
  })

  let data = await response.json()
  return data.results
}

export function getTopRatedFilms() {


}
