import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchGames } from '../reducers/games'
import styled from "styled-components"

export const Year = () => {
  const [year, setYear] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchGames(`/year/${year}`))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label className="input-label">
        Search for year:
        <Select
          value={year}
          onChange={(event) => setYear(event.target.value)}
          placeholder="year...">
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
        </Select>
        <Button type="submit">
          <span role="img" aria-label="add-button">🔎</span>
        </Button>
      </Label>
    </Form >
  )
}

const Form = styled.form`
padding: 10px;
width: 160px;
margin: 5px;
display:flex;
background-color: rgba(255,255,255, 0.5);

`

const Label = styled.label`
color: darkslategrey;
font-weight: bold;
`

const Select = styled.select`
font-size: 14px;
padding: 5px;
margin: 5px;
background-color: white;
`

const Button = styled.button`
font-size: 24px;
background-color: transparent;
border: none;
`
