let API_KEY = import.meta.env.MODE === 'development' ? import.meta.env.VITE_API_KEY : import.meta.env.API_KEY

export const searchByID = async ({ id, type, lang }) => {
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/${type}/${id}?api_key=${API_KEY}&append_to_response=videos,images,credits&include_image_language=${lang.replace(/-(\w+)/g, '')}&include_video_language=${lang.slice(0, 2)}&language=${lang}`)
    .catch((e) => {
      if (!response.ok) {
        throw new Error(`Returned with a ${response.status} code`)
      }
      console.error(e.message)
    })

  let data = await response.json()

  return { data }
}

export const searchByTitle = async ({ query, type = 'movie', lang = 'fr-FR' }) => {
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}&language=${lang}`)
    .catch((e) => {
      if (!response.ok) {
        throw new Error(`Returned with a ${response.status} code`)
      }
      console.error(e.message)
    })

  let { page: pageCurrent, results, total_pages, total_results } = await response.json()

  return { page: pageCurrent, results, total_pages, total_results }
}

export const getTopRated = async ({ type = 'movie', lang = 'fr-FR', page = 1 }) => {
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=${lang}&page=${page}`)
    .catch((e) => {
      if (!response.ok) {
        throw new Error(`Returned with a ${response.status} code`)
      }
      console.error(e.message)
    })

  let { page: pageCurrent, results, total_pages, total_results } = await response.json()

  return { page: pageCurrent, results, total_pages, total_results }
}

export const getPopular = async ({ type = 'movie', lang = 'fr-FR', page = 1 }) => {
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/${type}/popular?api_key=${API_KEY}&language=${lang}&page=${page}`)
    .catch((e) => {
      if (!response.ok) {
        throw new Error(`Returned with a ${response.status} code`)
      }
      console.error(e.message)
    })

  let { page: pageCurrent, results, total_pages, total_results } = await response.json()

  return { page: pageCurrent, results, total_pages, total_results }
}

export const getUpcoming = async ({ type = 'movie', lang = 'fr-FR', page = 1 }) => {
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/${type}/upcoming?api_key=${API_KEY}&language=${lang}&page=${page}`)
    .catch((e) => {
      if (!response.ok) {
        throw new Error(`Returned with a ${response.status} code`)
      }
      console.error(e.message)
    })

  let { dates, page: pageCurrent, results, total_pages, total_results } = await response.json()

  return {
    dates,
    page: pageCurrent,
    results,
    total_pages,
    total_results
  }
}

export const fetchGenresList = async ({ type, lang }) => {
  let response = await fetch(`${import.meta.env.VITE_BASE_URL}/genre/${type}/list?api_key=${API_KEY}&language=${lang}`)
    .catch((e) => {
      if (!response.ok) {
        throw new Error(`Returned with a ${response.status} code`)
      }
      console.error(e.message)
    })

  let { genres } = await response.json()

  return genres
}


export const fetchTvAndMovieGenresList = async (lang) => {
  const [movieGenresList, tvGenresList] = await Promise.all([fetchGenresList({ lang }), fetchGenresList({ type: 'tv', lang })])
  console.log(movieGenresList, tvGenresList)
}
