/* eslint-disable no-unused-vars */
import { render } from './render.js'
import {
  setPageAsCurrentPage,
  toggleSelectDropdown,
  handleSliders,
} from './ui.js'
import {
  getPopular,
  getTopRated,
  fetchGenresList,
  searchByTitle,
  getUpcoming,
} from './tmdb.js'
import { getParameterValue, getUserBrowserLanguage } from './utils/dom.js'

const app = document.querySelector('#app')
const form = document.querySelector('#search-form')
const inputElement = document.querySelector('input[name="search"]')
const sliderPopular = document.querySelector('#slider-popular')
const sliderTopRated = document.querySelector('#slider-top')
const sliderUpcoming = document.querySelector('#slider-upcoming')
const sliderGroups = [...document.querySelectorAll('[data-slider-group]')]
const sliders = document.querySelector('[data-sliders]')

const type = getParameterValue('search') ?? 'movie'
const currentPage = getParameterValue('page') ?? 'home'

const userBrowserLanguage = getUserBrowserLanguage()

// console.log(await fetchGenresList({ type, lang: userBrowserLanguage }))

App()

form.addEventListener('submit', async e => {
  e.preventDefault()
  if (inputElement.value.length === 0) return

  handleSliders()

  await render(
    app,
    {
      type,
      query: inputElement.value,
      lang: userBrowserLanguage,
    },
    searchByTitle,
    'poster'
  )
})

inputElement.addEventListener('input', async e => {
  const inputValue = e.target.value.trim()

  if (inputValue.length === 0) {
    handleSliders()
    App()
  }
})

document.addEventListener('click', e => {
  const dropdowns = [
    ...document.querySelectorAll('#sort-genres-group .dropdown'),
  ]

  if (
    !e.target.matches('#sort-genres-group .dropdown') &&
    !e.target.matches('#sort-genres-group > button')
  ) {
    dropdowns.forEach(dropdown => dropdown.classList.remove('show'))
  }
})

function App() {
  if (currentPage === 'tv') {
    sliderTopRated.parentElement.classList.add('hide')
    sliderUpcoming.parentElement.classList.add('hide')
    Promise.all([
      render(
        sliderPopular,
        {
          type,
          lang: userBrowserLanguage,
        },
        getPopular,
        'poster'
      ),
      render(
        app,
        {
          type,
          lang: userBrowserLanguage,
        },
        getTopRated,
        'poster'
      ),
      setPageAsCurrentPage(currentPage),
      toggleSelectDropdown(currentPage),
    ])
  }

  if (currentPage === 'movie') {
    sliderPopular.parentElement.classList.add('hide')
    sliderTopRated.parentElement.classList.add('hide')
    Promise.all([
      render(
        sliderUpcoming,
        {
          type,
          lang: userBrowserLanguage,
        },
        getUpcoming,
        'poster'
      ),
      // render(sliderPopular, { type, lang: userBrowserLanguage }, getPopular, 'poster'),
      render(
        app,
        {
          type,
          lang: userBrowserLanguage,
        },
        getTopRated,
        'poster'
      ),
      setPageAsCurrentPage(currentPage),
      toggleSelectDropdown(currentPage),
    ])
  }

  if (currentPage === 'home') {
    Promise.all([
      render(
        sliderPopular,
        {
          type,
          lang: userBrowserLanguage,
        },
        getPopular,
        'poster'
      ),
      render(
        sliderTopRated,
        {
          type,
          lang: userBrowserLanguage,
        },
        getTopRated,
        'poster'
      ),
      render(
        sliderUpcoming,
        {
          type,
          lang: userBrowserLanguage,
        },
        getUpcoming,
        'poster'
      ),
      setPageAsCurrentPage(currentPage),
      toggleSelectDropdown(currentPage),
    ])
  }
}
