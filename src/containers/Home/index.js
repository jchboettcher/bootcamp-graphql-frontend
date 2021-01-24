import React from 'react'
import { BackgroundDiv, HomeDiv, HomeLink } from '../../styles'

const Home = () => (
  <BackgroundDiv>
    <HomeDiv>
      <h1>Welcome to the Book Archives!</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HomeLink to="/authors">Browse by Author</HomeLink>
        <HomeLink to="/publishers">Browse by Publisher</HomeLink>
      </div>
    </HomeDiv>
  </BackgroundDiv>
)

export default Home
