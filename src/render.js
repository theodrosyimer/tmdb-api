import { FilmCards } from "./components/FilmCards.js"
import { FilmDetails } from "./components/FilmDetails.js"
import { searchByID } from "./tmdb.js"

/**
 *
 * @param {*} parentElement
 * @param {*} params
 * @param {*} callbackAsync
 * @param {'poster' | 'backdrop'} imageType
 */
export async function render(parentElement, params, callbackAsync, imageType) {
  const { id, query, type, lang, page } = params

  parentElement.innerHTML = await FilmCards(params, callbackAsync, imageType)

  parentElement.addEventListener('click', async e => {
    if (e.target.offsetParent.offsetParent.matches('div[data-id]')) {
      let { data } = await searchByID({ id: e.target.offsetParent.offsetParent.dataset.id, type, lang })
      console.log(data)
    }
  })
}
