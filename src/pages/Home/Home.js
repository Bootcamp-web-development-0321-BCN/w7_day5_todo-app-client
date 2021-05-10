import React from 'react'
import { Link } from 'react-router-dom'
import RoundButton from '../../components/RoundButton/RoundButton'
import Text from '../../components/Text'
import SCHome from './Home.styled'

function Home() {
  return (
    <SCHome>
      <div className="home-wrapper">
        <Text as="h1" uppercase size="xl" color="black" weight="gelionMedium">
          Hey <Text uppercase as="span" size="xl" weight="gelionMedium">Ironhacker</Text> 👋, organiza tus tareas en el proyecto final.
        </Text>
        <div className="button-container">
          <Link to="/todo-list">
            <RoundButton>
              Click
            </RoundButton>
          </Link>
        </div>
      </div>
    </SCHome>
  )
}

export default Home;