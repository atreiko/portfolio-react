import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from '../context/Themes'
import { motion } from 'framer-motion'

import { Frontend, Backend } from '../components/UI/SVG'
import LogoComponent from '../components/UI/LogoComponent'
import SocialIcons from '../components/UI/SocialIcons'
import PowerButton from '../components/UI/PowerButton'
import ParticleComponent from '../components/UI/ParticleComponent'
import BigTitle from '../components/BigTitle'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box      
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
          opacity: 0,
          transition: {
            duration: 0.5
          }
        }}
      >

        <LogoComponent theme='light' />
        <SocialIcons theme='light' />
        <PowerButton />
        <ParticleComponent theme='light' />

        <Main>
          <Title>
            <Frontend width={40} height={40} /> Frontend
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, React, Redux Toolkit, Sass, Styled Components etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, GitHub, GitLab, Figma</p>
          </Description>
        </Main>

        <Main>
          <Title>
            <Backend width={40} height={40} /> Backend
          </Title>
          <Description>
            I am learning to develop backend, because I love JavaScript not only on the frontend.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>NodeJS, Express, Mongoose</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Postman</p>
          </Description>
        </Main>

        <BigTitle text='SKILLS' top='80%' right='30%' />

      </Box>
    </ThemeProvider>
  )
}

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover {
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover & {
  & > * {
    fill: ${props => props.theme.body};
  }
}

& > *:first-child {
  margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(.6em + 1vw);
padding: .5rem 0;

${Main}:hover & {
  color: ${props => props.theme.body};
}

strong {
  margin-bottom: 1rem;
  text-transform: uppercase;
}
`

export default MySkillsPage