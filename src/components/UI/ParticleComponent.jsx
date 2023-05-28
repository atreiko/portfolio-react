import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import { configDark } from '../../config/particles-dark'
import { configLight } from '../../config/particles-light'

const ParticleComponent = (props) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
    // TypeError: Cannot read properties of undefined (reading 'destroyed')

    // container.destroyed = true
  }, []);

  return (
    <Box>
      <Particles  
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        style={{position: 'absolute', inset: '0'}}
        options={props.theme === 'light' ? configLight : configDark}
      />
    </Box>
  )
}

const Box = styled.div`
position: absolute;
inset: 0;
z-index: 0;
`



export default ParticleComponent