import { searchByTitle } from "../tmdb.js"

function Result({ adult,
  backdrop_path,
  genre_ids,
  id,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count }) {

  return `
  <div data-id=${id} class="search-result">
      <div class="film-poster">
        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${backdrop_path ?? poster_path}"
              alt="${title}'s poster">
      </div>
      <div class="film-infos">
        <div class="film-title-flex">
          <h3>${title}</h3>
          <span class="film-note">${vote_average.toFixed(1)}</span>
        </div>
        <p class="film-overview">${overview}</p>
      </div>
  </div>

`
}

export async function ShowResults(query) {
  let data = await searchByTitle(query)
  // console.log(data)

  let filmsElements = ''

  data.forEach(film => {
    if (film.poster_path == null) return
    if (film.backdrop_path == null) return

    return filmsElements += Result(film)
  })

  document.querySelector('#app').innerHTML = filmsElements
}
