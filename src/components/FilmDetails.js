import { searchByID } from "../tmdb.js"

export async function FilmDetails({ id, type, lang }) {
  // console.log(id)
  let { data } = await searchByID({ id, type, lang })

  let filmElements = ''

  // TODO: use `data`

  console.log(data)

  return ``
}
