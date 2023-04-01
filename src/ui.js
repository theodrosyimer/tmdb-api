export function handleLinks(page) {
  ;[...document.querySelectorAll('[data-link]')]
    .forEach((link) => link.removeAttribute('aria-current'))

  document.querySelector(`[data-link=${page}]`)
    .setAttribute('aria-current', 'page')
}

export function handleSelectGenresAndSortBy(page) {
  const selectSortAndGenreElement = document.querySelector('#sort-genres-group')

  if (page !== 'home') {
    selectSortAndGenreElement.style.opacity = 1
  }
}
