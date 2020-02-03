import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchGames } from '../reducers/games'
import styled from "styled-components"

let pageNumber = 1

export const NextButton = () => {
  const dispatch = useDispatch()

  const query = useSelector((store) => store.games.query)

  const handleClick = () => {
    if (query) {
      pageNumber += 1
      dispatch(fetchGames(`/boardgames?name=${query}&page=${pageNumber}`))
    } else {
      pageNumber += 1
      dispatch(fetchGames(`/boardgames?page=${pageNumber}`))
    }
    //only works with general fetch and query, not for sorted by rating or year
  }

  return (
    <Button type="button"
      onClick={handleClick}>
      More
      </Button >
  )
}

const Button = styled.button`
background-color: darkcyan;
color: white;
font-family: 'Quicksand', sans-serif;
font-size: 26px;
font-weight: bold;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
padding: 10px 18px;
`