/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { searchByID } from '../tmdb.js'

export async function FilmDetails({ id, type, lang }) {
  // console.log(id)
  const { data } = await searchByID({
    id,
    type,
    lang,
  }).catch(e => {
    console.error(e.stack)
  })

  // console.log(data)
  const {
    adult,
    backdrop_path,
    belongs_to_collection,
    budget,
    genres,
    homepage,
    id: idDetails,
    imdb_id,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline,
    title,
    video,
    vote_average,
    vote_count,
    videos,
    images,
    credits,
  } = data

  return `
  <div data-id=${idDetails}
       class="film-details-grid">
    <div class="film-backdrop backdrop-aspect-ratio">
      <img src="https://image.tmdb.org/t/p/w1280${backdrop_path}" alt="${title}'s poster">
    </div>
    <div class="film-infos-grid">
      <div class="film-title-flex">
        <h3>${title}</h3>
        <span class="film-note">${vote_average.toFixed(1)}</span>
      </div>
      <div class="film-buttons-flex">
        <button class="button film-button icon i-star"></button>
        <button class="button film-button icon i-plus"></button>
        <button class="button film-button icon i-ellipsis"></button>
      </div>
      <p class="film-overview">${overview}<span class="see-more">See
          more</span>
      </p>
    </div>
  </div>
`
}
