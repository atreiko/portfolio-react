import React from 'react'
import { Facebook, Github, Instagram, LinkedIn } from './SVG'
import { darkTheme } from '../../context/Themes'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const iconColor = {
  color: 'inherit'
}

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <a href='https://github.com/atreiko' style={iconColor} target='_blank' rel="noreferrer">
          <Github width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <a href='https://www.instagram.com/artem.godz' style={iconColor} target='_blank' rel="noreferrer">
          <Instagram width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <a href='https://www.facebook.com/artem.treiko.9' style={iconColor} target='_blank' rel="noreferrer">
          <Facebook width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <a href='https://www.linkedin.com/in/artem-treiko-b84569222' style={iconColor} target='_blank' rel="noreferrer">
          <LinkedIn width={25} height={25} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
        </a>
      </motion.div>
      <Line 
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: '8rem' }}
        transition={{ type: 'spring', duration: 1, delay: 0.8 }}
      />
    </Icons>
  )
}

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index:3;
& > *:not(:last-child) {
  margin: 0.5rem 0;
}
`

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

export default SocialIcons