import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

export const games = createSlice({
  name: "games",
  initialState: {
    games: [],
    savedGames: [],
    query: ""
  },
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload
    },
    setQuery: (state, action) => {
      state.query = action.payload
    }
  }
})

export const fetchGames = (path) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://boardgames-matilda-arvidsson.herokuapp.com${path}`)
      .then(res => res.json())
      .then(json => {
        dispatch(games.actions.setGames(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}