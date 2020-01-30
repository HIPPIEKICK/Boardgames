import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ui } from "reducers/ui"
import { games } from "reducers/games"
// import { Product } from "components/Product"
// import { LoadingIndicator } from 'components/LoadingIndicator'
// import { SavedProducts } from 'components/SavedProducts'
import styled from "styled-components/macro"
import { Games } from "./components/Games"
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"

const reducer = combineReducers({
  ui: ui.reducer,
  games: games.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <SearchBar />

        <Games />

      </Container>

    </Provider>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: goldenrod;
min-height: 600px;
`