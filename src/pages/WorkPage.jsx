import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from '../context/Themes'
import { motion } from 'framer-motion'

import LogoComponent from '../components/UI/LogoComponent'
import SocialIcons from '../components/UI/SocialIcons'
import PowerButton from '../components/UI/PowerButton'
import Card from '../components/Card'
import { YinYang } from '../components/UI/SVG'
import BigTitle from '../components/BigTitle'

import { Work } from '../data/WorkData.js'

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

const WorkPage = () => {
  const ref = useRef(null)
  const yinyang = useRef(null)

  useEffect(() => {
    let element = ref.current
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`

      yinyang.current.style.transform = `rotate(` + -window.pageYOffset + 'deg)'
    }
    window.addEventListener('scroll', rotate)

    return () => window.removeEventListener('scroll', rotate)
  }, [])
  
  return (
    <ThemeProvider theme={darkTheme}>
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

        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />

        <Main ref={ref} variants={container} initial='hidden' animate='show'>
          {
            Work.map(d => (
              <Card key={d.id} data={d} />
            ))
          }
        </Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <BigTitle text='WORK' top='10%' right='20%' />

      </Box>
    </ThemeProvider>
  )
}

const Box = styled(motion.ul)`
background-color: ${props => props.theme.body};
height: 340vh;
position: relative;
display: flex;
align-items: center;

@media screen and (max-width: 375px) {
  height: 480vh;
}

`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left: calc(10rem + 15vw);
height: 40v;

display: flex;
`

const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;
`

export default WorkPage