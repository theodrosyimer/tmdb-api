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

// console.log(await fetchGenresList({ type, lang: userBrowserLanguage }))

Promise.all([
  render(sliderElement, { type, lang: userBrowserLanguage }, getPopular, 'poster'),
  render(app, { type, lang: userBrowserLanguage }, getTopRated, 'poster'),
  handleLinks(currentPage),
  handleSelectGenresAndSortBy(currentPage)]
)

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  if (inputElement.value.length === 0) return

  sliderElement.innerHTML = ''

  await render(app, { type, query: inputElement.value, lang: userBrowserLanguage }, searchByTitle)
})

inputElement.addEventListener('input', async (e) => {
  let inputValue = e.target.value.trim()

  if (inputValue.length === 0) {
    Promise.all([
      render(sliderElement, { type, lang: userBrowserLanguage }, getPopular, 'poster'),
      render(app, { type, lang: userBrowserLanguage }, getTopRated, 'poster'),
      handleLinks(currentPage),])
  }
})

document.addEventListener('click', e => {
  const dropdowns = [...document.querySelectorAll('#sort-genres-group .dropdown')]

  if (!e.target.matches('#sort-genres-group .dropdown') && !e.target.matches('#sort-genres-group > button')) {
    dropdowns.forEach(dropdown => dropdown.classList.remove('show'))
  }
})


