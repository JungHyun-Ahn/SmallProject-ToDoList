// react
import React from 'react'
import { styled } from 'styled-components'

// -----------------------------------------------

const TodayDate = styled.h1`
  color: #02e5a5;
`;
// -----------------------------------------------

const Header = () => {
  return (
    <div>
      <h3>오늘은 . . .</h3>
      <TodayDate>{new Date().toDateString()}</TodayDate>
    </div>
  )
}

export default Header
