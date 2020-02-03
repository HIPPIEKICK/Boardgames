import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { games } from "reducers/games"
import { fetchGames } from '../reducers/games'
import styled from "styled-components"

let pageNumber = 1

export const NextButton = () => {
  const dispatch = useDispatch()
  // const [page, setPage] = useState(2)
  // How to make the button increase its number
  // Test:
  // 2 should be default, since it's action of "next-button"

  const query = useSelector((store) => store.games.query)

  const handleClick = () => {
    if (query) {
      pageNumber += 1
      dispatch(fetchGames(`/boardgames?name=${query}&page=${pageNumber}`))
    } else {
      pageNumber += 1
      dispatch(fetchGames(`/boardgames?page=${pageNumber}`))
    }
    //only works with general fetch, but not after query for example
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