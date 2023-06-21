/* eslint-disable prettier/prettier */
/* eslint-disable babel/camelcase */
/* eslint-disable camelcase */
const API_KEY = import.meta.env.VITE_API_KEY

export async function searchByID({ id, type, lang }) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/${type}/${id}?api_key=${API_KEY}&append_to_response=videos,images,credits&include_image_language=${lang.replace(
      /-(\w+)/g,
      ''
    )}&include_video_language=${lang.slice(0, 2)}&language=${lang}`
  )

  if (!response.ok) {
    throw new Error(`Returned with a ${response.status} code`)
  }

  const data = await response.json()

  return { data }
}

export async function searchByTitle({ query, type, lang }) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}&language=${lang}`
  )

  if (!response.ok) {
    throw new Error(`Returned with a ${response.status} code`)
  }

  const { page: pageCurrent, results, total_pages, total_results } = await response.json()

  return {
    page: pageCurrent,
    results,
    total_pages,
    total_results,
  }
}

export async function getTopRated({ type, lang, page = 1 }) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=${lang}&page=${page}`
  )

  if (!response.ok) {
    throw new Error(`Returned with a ${response.status} code`)
  }

  const { page: pageCurrent, results, total_pages, total_results } = await response.json()

  return {
    page: pageCurrent,
    results,
    total_pages,
    total_results,
  }
}

export async function getPopular({ type, lang, page = 1 }) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/${type}/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
  )

  if (!response.ok) {
    throw new Error(`Returned with a ${response.status} code`)
  }

  const { page: pageCurrent, results, total_pages, total_results } = await response.json()

  return {
    page: pageCurrent,
    results,
    total_pages,
    total_results,
  }
}

export async function getUpcoming({ type, lang, page = 1 }) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/${type}/upcoming?api_key=${API_KEY}&language=${lang}&page=${page}`
  )

  if (!response.ok) {
    throw new Error(`Returned with a ${response.status} code`)
  }

  const { dates, page: pageCurrent, results, total_pages, total_results, } = await response.json()

  return {
    dates,
    page: pageCurrent,
    results,
    total_pages,
    total_results,
  }
}

export async function fetchGenresList({ type, lang }) {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/genre/${type}/list?api_key=${API_KEY}&language=${lang}`
  )

  if (!response.ok) {
    throw new Error(`Returned with a ${response.status} code`)
  }

  const { genres } = await response.json()

  return genres
}
export async function fetchTvAndMovieGenresList(lang) {
  const [movieGenresList, tvGenresList] = await Promise.all([
    fetchGenresList({ lang }),
    fetchGenresList({
      type: 'tv',
      lang,
    }),
  ])
  console.log(movieGenresList, tvGenresList)
}
