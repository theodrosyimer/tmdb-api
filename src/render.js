import { FilmCards } from "./components/FilmCards.js"
import { FilmDetails } from "./components/FilmDetails.js"

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
    const currentFilm = e.target.closest('div[data-id]')

    if (currentFilm == null) return

    document.querySelector('.main-grid').innerHTML = ''
    document.querySelector('.main-grid').innerHTML = await FilmDetails({ id: currentFilm.dataset.id, type, lang, imageType })

  })
}
