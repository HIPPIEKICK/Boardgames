import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGames, games } from '../reducers/games'
import styled from "styled-components"

export const SearchBar = () => {
  // const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const query = useSelector((store) => store.games.query)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (query.length > 0) {
      dispatch(fetchGames(`/boardgames?name=${query}`))
      // dispatch(games.actions.setQuery(""))
      //To empty input-field after submit
      // It's not compatible with "next-page"
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label className="input-label">
        <Input type="text"
          value={query}
          onChange={(event) => dispatch(games.actions.setQuery(event.target.value))}
          placeholder="Search for game..." />
        <Button type="submit"><span role="img" aria-label="add-button">🔎</span></Button>
      </Label>

    </Form>
  )
}

const Form = styled.form`
padding: 10px 10px 0 10px;
width: 380px;

`

const Label = styled.label`

`

const Input = styled.input`
font-size: 14px;
padding: 5px;
margin: 0 0 0 6px;
width: 320px;
`

const Button = styled.button`
font-size: 24px;
background-color: transparent;
border: none;
`
