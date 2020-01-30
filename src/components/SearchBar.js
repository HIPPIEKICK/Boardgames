import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchGames } from '../reducers/games'


export const SearchBar = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (query.length > 0) {
      dispatch(fetchGames(`/boardgames?name=${query}`))
      setQuery("")
      //To empty input-field after submit
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="input-label">
        <input type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for game..." />
        <button type="submit"><span role="img" aria-label="add-button">🔎</span></button>
      </label>

    </form>
  )
}

