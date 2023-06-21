import { FilmCard } from './FilmCard.js'

/**
 *
 * @param {*} params
 * @param {*} callbackAsync
 * @param {'poster' | 'backdrop'} imageType
 * @returns
 */
export async function FilmCards(params, callbackAsync, imageType) {
  const { results } = await callbackAsync(params).catch(e => {
    console.error(e.stack)
  })

  let filmElements = ''

  results.forEach(film => {
    if (film?.poster_path == null) return
    if (film?.backdrop_path == null) return

    filmElements += FilmCard(imageType, film)
  })

  return filmElements
}
