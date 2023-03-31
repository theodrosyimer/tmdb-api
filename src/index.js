import { ShowResults } from "./components/SearchResults.js"
import { getParameterValue } from "./dom.js"
import { getPopular, getTopRated, searchByTitle } from "./tmdb.js"

const sliderElement = document.querySelector('#slider')
const form = document.querySelector('#search-form')
const inputElement = document.querySelector('input[name="search"]')
const app = document.querySelector('#app')

let type = getParameterValue(['search'])

Promise.all([ShowResults(sliderElement, { type, lang: 'fr-FR' }, getPopular), ShowResults(app, { type, lang: 'fr-FR' }, getTopRated)])

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  if (inputElement.value.length === 0) return

  await ShowResults(app, { query: inputElement.value }, searchByTitle)
})



inputElement.addEventListener('input', async (e) => {
  let inputValue = e.target.value

  if (inputValue.length === 0) {
    // app.innerHTML = ''
    // await ShowResults(app, { lang: 'fr-FR' }, getTopRated)
  }
})
