import { render } from "./render.js"
import { handleLinks, handleSelectGenresAndSortBy } from "./ui.js"
import { getPopular, getTopRated, fetchGenresList, searchByTitle } from "./tmdb.js"
import { getParameterValue, getUserBrowserLanguage } from "./utils/dom.js"

const app = document.querySelector('#app')
const form = document.querySelector('#search-form')
const inputElement = document.querySelector('input[name="search"]')
const sliderElement = document.querySelector('#slider')


let type = getParameterValue('search') ?? 'movie'
let currentPage = getParameterValue('page') ?? 'home'

let userBrowserLanguage = getUserBrowserLanguage()

// console.log(await fetchGenresList({ type }))

Promise.all([
  render(sliderElement, { type, lang: userBrowserLanguage }, getPopular),
  render(app, { type, lang: userBrowserLanguage }, getTopRated),
  handleLinks(currentPage),
  handleSelectGenresAndSortBy(currentPage)]
)

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  if (inputElement.value.length === 0) return

  sliderElement.innerHTML = ''

  await render(app, { query: inputElement.value }, searchByTitle)
})

inputElement.addEventListener('input', async (e) => {
  let inputValue = e.target.value.trim()

  if (inputValue.length === 0) {
    Promise.all([
      render(sliderElement, { type, lang: userBrowserLanguage }, getPopular),
      render(app, { type, lang: userBrowserLanguage }, getTopRated),
      handleLinks(currentPage),])
  }
})


