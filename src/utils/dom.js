/**
 *
 * @param {DocumentEventMap} event
 * @param {string} selector
 * @param {(...args) => unknown} callback
 * @param {{}} options
 * @param {HTMLElement} parent
 */
export function addGlobalEventListener(
  event,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    event,
    e => {
      if (e.target.matches(selector)) callback(e)
    },
    options
  )
}

/**
 *
 * @param {[]} elements
 * @param {*} createElement
 * @returns {HTMLElementTagNameMap[] | HTMLUnknownElement}
 */
export function batchCreateElement(elements, createElement) {
  const createdElements = []

  elements.forEach(element => createdElements.push(createElement(element)))

  return createdElements
}

/**
 *
 * @param {{tag: HTMLElementTagNameMap | HTMLUnknownElement, options: {}}} config
 * @returns
 */
export function createElement({ tag, options = {} }) {
  const element = document.createElement(tag)
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'class') {
      if (Array.isArray(value)) {
        element.classList.add(...value)
      } else {
        element.classList.add(value)
      }
    }

    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue
      })
    }

    if (key === 'text') {
      element.textContent = value
    }

    if (!['class', 'text', 'dataset'].includes(key)) {
      element.setAttribute(key, value)
    }
  })

  return element
}

/**
 *
 * @param {HTMLElement} parent
 * @param {HTMLElement} children
 */
export function appendChildren(parent, children) {
  children.forEach(child => parent.appendChild(child))
}

/**
 *  * be careful interprets `+` as spaces
 * @see [URLSearchParams - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#preserving_plus_signs)
 * @param {string} url
 * @returns {URLSearchParams}
 */
export function getSearchParamsFromURL(url = window.location.href) {
  return new URL(url).searchParams
}

/**
 *
 * @param {string} name
 * @param {string} url
 * @returns {URLSearchParams}
 */
export function getParameterValue(
  name,
  method = 'get',
  url = window.location.href
) {
  return getSearchParamsFromURL(url)[method](name)
}

export function getUserBrowserLanguage() {
  return navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language
}

export function isIOS() {
  return (
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    !window.MSStream
  )
}
