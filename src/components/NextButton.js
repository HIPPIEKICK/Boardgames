import React from "react"
import { useDispatch } from "react-redux"
import { games } from "reducers/games"
import { fetchGames } from '../reducers/games'


export const NextButton = () => {
  const dispatch = useDispatch()

  //How to make the button increase its number

  return (
    <button type="button"
      onClick={() => dispatch(fetchGames(`/boardgames?page=2`))}>
      More
      </button>
  )

}