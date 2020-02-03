import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components/macro"
import { fetchGames } from '../reducers/games'
import { NextButton } from "./NextButton"

export const Games = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGames("/boardgames"))
  }, [dispatch])

  const gamesList = useSelector(state => state.games.games)

  return (
    <>
      {gamesList.map((game) => (
        <GameContainer key={game.id}>
          <GameName>{game.name}</GameName>
          <Content>
            <GameContainerRow>
              <GameContainerColumn>
                <GameInfo><Fat>Year: </Fat> {game.year}</GameInfo>
                <GameInfo><Fat>Rank: </Fat> {game.rank} </GameInfo>
                <GameInfo><Fat>Average rating: </Fat> {game.average}</GameInfo>
                <GameInfo><Fat>Users rated: </Fat> {game.users_rated}</GameInfo>
              </GameContainerColumn>
              <GameImage src={game.thumbnail}></GameImage>
            </GameContainerRow>
          </Content>
        </GameContainer>
      ))}
      <NextButton />
    </>
  )
}

const GameContainer = styled.div`
display:flex;
flex-direction: column;
width: 400px;
height: auto;
padding-bottom: 20px;
background: lightcyan;
margin: 5px;
`
const GameName = styled.h1`
margin: 0;
padding: 10px;
font-size: 24px;
text-align: start;
background-color: darkcyan;
color: white;
box-shadow: 0px 8px 4px -4px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.14), 0px 4px 12px 0px rgba(0,0,0,.12);
`

const Content = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin-top: 20px;
`

const GameContainerColumn = styled.div`
display:flex;
flex-direction: column;
background: white;
padding: 10px;
border: 2px solid darkcyan;
border-radius: 10px;
`

const GameContainerRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`

const GameInfo = styled.p`
margin: 0;
font-size: 14px;
display: inline-flex;
`

const Fat = styled.span`
font-weight: bold;
color: darkcyan;
margin-right: 3px;
`

const GameImage = styled.img`
width: 100px;
height: auto;
display: inline-flex;
border: 2px solid darkcyan;
border-radius: 10px;
`