import { FilmCards } from "./components/FilmCards.js"
import { FilmDetails } from "./components/FilmDetails.js"

export async function render(parentElement, params, callbackAsync) {
  const { id, query, type, lang, page } = params
  parentElement.innerHTML = await FilmCards(params, callbackAsync)

  parentElement.addEventListener('click', async e => {
    if (e.target.offsetParent.offsetParent.matches('div[data-id]')) {

      let data = await FilmDetails({ id: e.target.offsetParent.offsetParent.dataset.id, type, lang })
      console.log(data)
    }
  })
}
