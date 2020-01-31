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
      <Chip
        type="button"
        onClick={handleAverage}>
        Sort by average rating
    </ Chip>
      <Chip
        type="button"
        onClick={handleRank}>
        Sort by rank
   </ Chip>
    </Container>
  )
}

const Container = styled.div`
display: flex;
margin: 10px;
`

const Chip = styled.button`
display: inline-flex;
background-color: wheat;
/* background: #f1f1f1; */
color: black;
font-size: 14px;
border: none;
border-radius: 15px;
padding: 5px 10px;
margin: 5px;
`