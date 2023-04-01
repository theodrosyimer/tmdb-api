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
  vote_count }) {

  let overviewShorter = overview.split(' ').slice(0, 20).join(' ')

  return `
  <div data-id=${id} class="film-card">
      <div class="film-poster">
        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}"
              alt="${title}'s poster">
      </div>
      <div class="film-infos">
        <!-- <div class="film-title-flex">
          <h3>${title}</h3>
          <span class="film-note">${vote_average.toFixed(1)}</span>
        </div> -->
        <p class="film-overview">${overviewShorter}...<span class="see-more">See more</span></p>
      </div>
  </div>
`
}
