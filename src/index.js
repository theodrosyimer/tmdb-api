import { ShowResults } from "./components/SearchResults.js"
// import { getFilmDetails, searchByTitle } from "./tmdb.js"

const form = document.querySelector('#search-form')
const inputElement = document.querySelector('input[name="search"]')
const app = document.querySelector('#app')


app.addEventListener('click', (e) => {
  if (!e.target.matches('.film-poster')) {
    console.log(e.target)
  }

})

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  if (inputElement.value.length === 0) return

  await ShowResults(inputElement.value)
})

inputElement.addEventListener('input', async (e) => {
  let inputValue = e.target.value

  // if (inputValue.length >= 3) {
  //   let data = await searchByTitle(inputValue)
  //   console.log(data)

  //   let titles = data.map(film => {
  //     if (film.title == null) {}
  //     console.log(film)
  //     const { adult,
  //       backdrop_path,
  //       genre_ids,
  //       id,
  //       original_language,
  //       original_title,
  //       overview,
  //       popularity,
  //       poster_path,
  //       release_date,
  //       title,
  //       video,
  //       vote_average,
  //       vote_count } = film
  //     return film
  //   })
  //   console.log(titles)
  //   app.innerHTML = JSON.stringify(titles, null, 2)
  // }

  if (inputValue.length === 0) {
    app.innerHTML = ''
  }
})
