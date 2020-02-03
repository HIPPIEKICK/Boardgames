import React from "react"
import styled from "styled-components"

export const Header = () => {

  return (
    <GameHeader>
      BOARDGAMES
    </GameHeader>
  )
}

const GameHeader = styled.h1`
margin: 0;
width:100%;
padding: 30px;
font-size: 40px;
text-align: center;
background-color: #004f4f;
color: white;
box-shadow: 0px 8px 4px -4px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.14), 0px 4px 12px 0px rgba(0,0,0,.12);
font-family: 'Bowlby One SC', cursive;
letter-spacing: 8px;
`

