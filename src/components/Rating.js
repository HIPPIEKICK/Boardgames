import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchGames } from '../reducers/games'
import styled from "styled-components"


export const Rating = () => {
  const dispatch = useDispatch()

  const handleAverage = () => {
    dispatch(fetchGames(`/rating/average`))
  }

  const handleRank = () => {
    dispatch(fetchGames(`/rating/rank`))
  }

  return (
    <Container>
      Sort by:
      <Chips>
        <Chip
          type="button"
          onClick={handleAverage}>
          average rating
    </ Chip>
        <Chip
          type="button"
          onClick={handleRank}>
          rank
   </ Chip>
      </Chips>
    </Container>
  )
}

const Container = styled.div`
width: 160px;
padding: 10px;
margin: 5px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(255,255,255, 0.5);
color: darkslategrey;
font-weight: bold;
`

const Chips = styled.div`
display:flex;
`

const Chip = styled.button`
display: inline-flex;
background-color: goldenrod;
color: white;
font-size: 14px;
font-weight: 400;
border: none;
border-radius: 15px;
padding: 2px 8px;
margin: 5px;
box-shadow: 0px 8px 4px -4px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.14), 0px 4px 12px 0px rgba(0,0,0,.12);
`