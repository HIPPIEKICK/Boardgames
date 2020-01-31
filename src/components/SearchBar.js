import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchGames } from '../reducers/games'
import styled from "styled-components"

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
    <Form onSubmit={handleSubmit}>
      <Label className="input-label">
        <Input type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for game..." />
        <Button type="submit"><span role="img" aria-label="add-button">🔎</span></Button>
      </Label>

    </Form>
  )
}

const Form = styled.form`
padding: 10px;
width: 380px;

`

const Label = styled.label`

`

const Input = styled.input`
font-size: 14px;
padding: 5px;
margin: 5px 5px 5px 0px;
width: 320px;
`

const Button = styled.button`
font-size: 24px;
background-color: transparent;
border: none;
`
