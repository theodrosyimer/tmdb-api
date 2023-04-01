import { FilmCard } from "./FilmCard.js"

export async function FilmCards(params, callbackAsync) {
  let { results } = await callbackAsync(params)

  let filmElements = ''

  results.forEach(film => {
    if (film?.poster_path == null) return
    if (film?.backdrop_path == null) return

    filmElements += FilmCard(film)
  })

  return filmElements
}
