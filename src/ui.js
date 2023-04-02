export function handleLinks(page) {
  ;[...document.querySelectorAll('[data-link]')]
    .forEach((link) => link.removeAttribute('aria-current'))

  document.querySelector(`[data-link=${page}]`)
    .setAttribute('aria-current', 'page')
}

export function handleSelectGenresAndSortBy(page) {
  const selectSortAndGenreElement = document.querySelector('#sort-genres-group')
  const dropdowns = [...document.querySelectorAll('#sort-genres-group .dropdown')]

  if (page !== 'home') {
    selectSortAndGenreElement.style.opacity = 1
  }

  selectSortAndGenreElement.addEventListener('click', e => {
    if (e.target.matches('#sort-genres-group > button')) {
      let currentDropdown = document.querySelector(`button[data-action="${e.target.dataset.action}"] .dropdown`)

      if (currentDropdown.classList.contains('show')) {
        currentDropdown.classList.remove('show')
        return
      }
      dropdowns.forEach(dropdown => dropdown.classList.remove('show'))

      currentDropdown.classList.add('show')
    }


  })
}

export function handleCardBtns() {

}
