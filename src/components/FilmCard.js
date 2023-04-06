/**
 * The TMDB API response.
 * @typedef {Object} TMDBResponse
 * @property {number} page - the returned page number
 * @property {Array<Film>} results - an array of films
 * @property {number} total_pages - total pages count
 * @property {number} total_results - total results count
 */

/**
 * The TMDB API response.
 * @typedef {Object} Film
 * @property {boolean} adult - the returned page number
 * @property {string} backdrop_path - an array of films
 * @property {number[]} genre_ids - total pages count
 * @property {number}   id - total results count
 * @property {string}   original_language - total results count
 * @property {string}   original_title - total results count
 * @property {string}   overview - total results count
 * @property {number}   popularity - total results count
 * @property {string}   poster_path - total results count
 * @property {string}   release_date - total results count
 * @property {string}   title - total results count
 * @property {boolean}   video - total results count
 * @property {number}   vote_average - total results count
 * @property {number}   vote_count - total results count
 */

/**
 *
 * @param {Film[]} results - an array of Film from TMDB API
 * @param {'poster' | 'backdrop'} imageType
 * @returns
 */
export function FilmCard({ adult,
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
  vote_count } = results, imageType) {

  let overviewShorter = overview.split(' ').slice(0, 15).join(' ')

  return `
  <div data-id=${id} class="film-card">
      <div class="film-poster ${imageType}-aspect-ratio">
        <img src="https://image.tmdb.org/t/p/w780${imageType === 'poster' ? poster_path : backdrop_path}"
              alt="${title}'s poster">
      </div>
      <div class="film-infos-grid">
        <!-- <div class="film-title-flex">
              <h3>${title}</h3>
              <span class="film-note">${vote_average.toFixed(1)}</span>
          </div> -->
        <div class="film-buttons-flex">
            <button class="button film-button icon i-star"></button>
            <button class="button film-button icon i-plus"></button>
            <button class="button film-button icon i-ellipsis"></button>
        </div>
        <p class="film-overview">${overviewShorter}...<span class="see-more">See more</span>
        </p>
      </div>
  </div>
`
}
