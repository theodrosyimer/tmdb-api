export const qs = (selector, parent = document) => parent.querySelector(selector)

export const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)]

export function addClasses(selector, classes, parent = document) {
  if (!selector || (typeof selector !== 'string') || selector == null || !classes || !classes.length || classes == null) throw new Error(`
  Need a selector, passed value: ${JSON.stringify(selector)}
  Need a class or an array of classes, passed value: ${JSON.stringify(classes)}`)

  if (Array.isArray(classes)) {
    parent.querySelector(selector).classList.add(...classes)
  }
  if (typeof classes === 'string') {
    parent.querySelector(selector).classList.add(classes)
  }
  if (selector instanceof HTMLElement) {
    selector.classList.add(classes)
  }

}

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

export function batchCreateElement(elements, createElement) {
  let createdElements = []

  elements.forEach(element => createdElements.push(createElement(element)))

  return createdElements
}

export function createElement({ tag, options = {} }) {
  const element = document.createElement(tag)
  Object.entries(options).forEach(([key, value]) => {

    if (key === 'class') {
      if (Array.isArray(value)) {
        element.classList.add(...value)

      } else { element.classList.add(value) }
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

export function appendChildren(parent, children) {
  children.forEach(child => parent.appendChild(child))
}

/**
 *  * be careful interprets `+` as spaces
 * @see [URLSearchParams - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#preserving_plus_signs)
 * @param {string} url
 * @returns
*/
export const getSearchParamsFromURL = (url = window.location.href) => new URL(url).searchParams

/**
 *
 * @param {Array} params
 * @param {string} url
 * @returns
 */
export const getParameterValue = (params, method = 'get', url = window.location.href) => getSearchParamsFromURL(url)[method](...params)


export const isIOS = () => {
  return (
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) && !window.MSStream
  )
}
